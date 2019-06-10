import clockTemplate from '../templates/clock_template';
import Constants from '../utils/constants';

const ClockView = (container) => {
    container.innerHTML = clockTemplate();

    const hasClass = (el, className) => {
        if (el.classList)
            return el.classList.contains(className);
        return el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    };

    const addClass = (el, className) => {
        if (el.classList)
            el.classList.add(className);
        else if (!hasClass(el, className))
            el.className += " " + className;
    };

    return {
        setErrorMessage: (errorMessage) => {
            document.getElementById('berlinClock').innerHTML = errorMessage;
        },

        setBerlinTime: (berlinTime) => {
            if(berlinTime[0] === Constants.LIGHT_YELLOW){
                let light = document.querySelectorAll('#secondsLamp .light')[0];
                addClass(light, 'on');
            }
        },
    };
};

export default ClockView;