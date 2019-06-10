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

    const removeClass = (el, className) => {
        if (el.classList)
            el.classList.remove(className);
        else if (hasClass(el, className))
        {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };

    return {
        setErrorMessage: (errorMessage) => {
            document.getElementById('berlinClock').innerHTML = errorMessage;
        },

        setBerlinTime: (berlinTime) => {
            let light = document.querySelectorAll('#secondsLamp .light')[0];

            if(berlinTime[0] === Constants.LIGHT_YELLOW){
                removeClass(light, 'off');
                addClass(light, 'on');
            }else{
                removeClass(light, 'on');
                addClass(light, 'off');
            }
        },
    };
};

export default ClockView;