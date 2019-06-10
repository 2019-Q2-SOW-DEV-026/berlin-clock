import Constants from '../utils/constants';

const ClockPresenter = (_view, _model) => {
    const clockView = _view;
    const digitalTimeModel = _model;

    const isEven = (number) => {
        return number % 2 === 0;
    };

    const isInValidTime = (time) => {
        return !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
    };

    const isLightTurnedOn = (lampIndex, lampsToBeTurnedOn) => {
        return lampIndex <= lampsToBeTurnedOn;
    };

    const getLampsStatus = (lampsToBeTurnedOn, totalLampsInRow) => {
        let lamps = "";
        for (let lampIndex = 1; lampIndex <= totalLampsInRow; lampIndex++) {
            lamps += isLightTurnedOn(lampIndex, lampsToBeTurnedOn) ? Constants.LIGHT_RED : Constants.LIGHT_OFF;
        }
        return lamps;
    };

    const singleHoursRow = () => {
        const digitalTime = digitalTimeModel.getTime();
        const hours = digitalTime.split(':')[0];
        let lampsToBeTurnedOn = hours % 5;

        return getLampsStatus(lampsToBeTurnedOn, Constants.TOTAL_SINGLE_HOURS_LAMPS);
    };

    const fiveHoursRow = () => {
        const digitalTime = digitalTimeModel.getTime();
        const hours = digitalTime.split(':')[0];
        let lampsToBeTurnedOn = Math.floor(hours / 5);

        return getLampsStatus(lampsToBeTurnedOn, Constants.TOTAL_FIVE_HOURS_LAMPS);
    };

    const secondsLamp = () => {
        const digitalTime = digitalTimeModel.getTime();
        const seconds = digitalTime.split(':')[2];

        return isEven(seconds) ? Constants.LIGHT_YELLOW : Constants.LIGHT_OFF;
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
        fiveHoursRow,
        singleHoursRow
    };
};

export default ClockPresenter;