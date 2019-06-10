import Constants from '../utils/constants';

const ClockPresenter = (_view, _model) => {
    const clockView = _view;
    const digitalTimeModel = _model;

    const isEven = (number) => {
        return number % 2 === 0;
    };

    const isMultipleOf3 = (number) => {
        return number % 3 === 0;
    };

    const isInValidTime = (time) => {
        return !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
    };

    const isLightTurnedOn = (lampIndex, lampsToBeTurnedOn) => {
        return lampIndex <= lampsToBeTurnedOn;
    };

    const getLampsStatus = (lampsToBeTurnedOn, totalLampsInRow, color) => {
        let lamps = "";
        for (let lampIndex = 1; lampIndex <= totalLampsInRow; lampIndex++) {
            lamps += isLightTurnedOn(lampIndex, lampsToBeTurnedOn) ? color(lampIndex) : Constants.LIGHT_OFF;
        }
        return lamps;
    };

    const singleMinutesRow = (minutes) => {
        return 'OOOO'; 
    };

    const fiveMinutesRow = () => {
        const digitalTime = digitalTimeModel.getTime();
        const minutes = digitalTime.split(':')[1];
        const lampsToBeTurnedOn = Math.floor(minutes / 5);

        return getLampsStatus(
            lampsToBeTurnedOn, 
            Constants.TOTAL_FIVE_MINUTES_LAMPS,
            (lampIndex) => isMultipleOf3(lampIndex) ? Constants.LIGHT_RED : Constants.LIGHT_YELLOW);
    };

    const singleHoursRow = () => {
        const digitalTime = digitalTimeModel.getTime();
        const hours = digitalTime.split(':')[0];
        const lampsToBeTurnedOn = hours % 5;

        return getLampsStatus(
            lampsToBeTurnedOn, 
            Constants.TOTAL_SINGLE_HOURS_LAMPS, 
            () => Constants.LIGHT_RED);
    };

    const fiveHoursRow = () => {
        const digitalTime = digitalTimeModel.getTime();
        const hours = digitalTime.split(':')[0];
        const lampsToBeTurnedOn = Math.floor(hours / 5);

        return getLampsStatus(
            lampsToBeTurnedOn, 
            Constants.TOTAL_FIVE_HOURS_LAMPS, 
            () => Constants.LIGHT_RED);
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
        singleHoursRow,
        fiveMinutesRow,
        singleMinutesRow
    };
};

export default ClockPresenter;