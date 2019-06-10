import Constants from '../utils/constants';

const ClockPresenter = (_view, _model) => {
    const clockView = _view;
    const digitalTimeModel = _model;

    const isInValidTime = (time) => {
        const seconds = time.split(':')[2];
        const minutes = time.split(':')[1];

        return  !/^([0-5][0-9])?$/.test(seconds) ||
                !/^([0-5][0-9])?$/.test(minutes);
    };

    const getBerlinTime = () => {
        const digitalTime = digitalTimeModel.getTime();
        if(isInValidTime(digitalTime)){
            return clockView.setErrorMessage(Constants.ERROR_MESSAGE);
        }
        return '';
    };

    return {
        getBerlinTime
    };
};

export default ClockPresenter;