import clockTemplate from '../templates/clock_template';

const ClockView = (container) => {
    container.innerHTML = clockTemplate();

    return {
        setErrorMessage: (errorMessage) => {
            document.getElementById('berlinClock').innerHTML = errorMessage;
        }
    };
};

export default ClockView;