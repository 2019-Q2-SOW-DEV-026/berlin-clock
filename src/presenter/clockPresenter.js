import Constants from '../utils/constants';

const ClockPresenter = (_view, _model) => {
    const clockView = _view;
    const digitalTimeModel = _model;

    const isInValidTime = (time) => {
        return !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
    };

    const fiveHoursRow = () => {
        return 'OOOO';
    };

    const secondsLamp = () => {
        const digitalTime = digitalTimeModel.getTime();
        const seconds = digitalTime.split(':')[2];

        return seconds % 2 === 0 ? Constants.LIGHT_YELLOW : Constants.LIGHT_OFF;
    };

    const getBerlinTime = () => {
        const digitalTime = digitalTimeModel.getTime();
        if(isInValidTime(digitalTime)){
            return clockView.setErrorMessage(Constants.ERROR_MESSAGE);
        }
        return '';
    };

    return {
        getBerlinTime,
        secondsLamp,
        fiveHoursRow
    };
};

export default ClockPresenter;