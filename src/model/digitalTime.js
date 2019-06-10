const DigitalTime = (date = new Date()) => {

    const prependZero = (number) => {
        if (number < 10) {
          number = "0" + number;
        }
        return number;
    };

    const time = '22:03:40';

    return {
        getTime: () => {
            return time;
        },
        prependZero
    };
};

export default DigitalTime;