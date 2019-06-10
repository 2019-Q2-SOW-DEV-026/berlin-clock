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

    const toggleLight = (light, lightSwitch) => {
        if(lightSwitch === 'on'){
            removeClass(light, 'off');
            addClass(light, 'on');
        }else{
            removeClass(light, 'on');
            addClass(light, 'off');
        }
    };

    return {
        showErrorMessage: (errorMessage) => {
            document.getElementById('berlinClock').innerHTML = errorMessage;
        },

        showBerlinTime: (berlinTime) => {
            let lights = document.querySelectorAll('.light');
    
            for (let berlinClockIndex = 0; berlinClockIndex < lights.length; berlinClockIndex += 1) {
                if (berlinTime[berlinClockIndex] === Constants.LIGHT_YELLOW || berlinTime[berlinClockIndex] === Constants.LIGHT_RED) {
                    toggleLight(lights[berlinClockIndex], 'on');
                } else if (berlinTime[berlinClockIndex] === Constants.LIGHT_OFF) {
                    toggleLight(lights[berlinClockIndex], 'off');
                }
            }
        },
    };
};

export default ClockView;