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
            let light = document.querySelectorAll('#secondsLamp .light')[0];

            if(berlinTime[0] === Constants.LIGHT_YELLOW){
                toggleLight(light, 'on');
            }else{
                toggleLight(light, 'off');
            }

            for (let fiveHourRowIndex = 0; fiveHourRowIndex < 4; fiveHourRowIndex ++) {
                let light = document.querySelectorAll('#fiveHourRow .light')[fiveHourRowIndex];
                if (berlinTime[fiveHourRowIndex + 1] === Constants.LIGHT_RED) {
                    toggleLight(light, 'on');
                }else if (berlinTime[fiveHourRowIndex + 1] === Constants.LIGHT_OFF) {
                    toggleLight(light, 'off');
                }
            }
        },
    };
};

export default ClockView;