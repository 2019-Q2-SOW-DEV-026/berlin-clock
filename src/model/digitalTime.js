const DigitalTime = () => {

    const prependZero = (number) => {
        if (number < 10) {
          number = "0" + number;
        }
        return number;
    };

    return {
        getTime: (date = new Date()) => {
            const hour = prependZero(date.getHours());
            const minute = prependZero(date.getMinutes());
            const second = prependZero(date.getSeconds());

            return hour + ":" + minute + ":" + second;
        },
        prependZero
    };
};

export default DigitalTime;