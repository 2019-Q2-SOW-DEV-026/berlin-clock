import Constants from '../utils/constants';

const ClockPresenter = (_view, _model) => {
    const clockView = _view;
    const digitalTimeModel = _model;

    const isInValidTime = (time) => {
        const seconds = time.split(':')[2];
    
        return !/^([0-5][0-9])?$/.test(seconds);
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