const DigitalTime = (date = new Date()) => {

    const prependZero = (number) => {
        if (number < 10) {
          number = "0" + number;
        }
        return number;
    };

    const hour = prependZero(date.getHours());
    const minute = prependZero(date.getMinutes());
    const second = prependZero(date.getSeconds());
    const time = hour + ":" + minute + ":" + second;

    return {
        getTime: () => {
            return time;
        },
        prependZero
    };
};

export default DigitalTime;