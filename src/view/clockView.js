import clockTemplate from '../templates/clock_template';
import Constants from '../constants';

const ClockView = (container) => {
    container.innerHTML = clockTemplate();

    const addClass = (el, className) => {
        el.classList.add(className);
    };

    const removeClass = (el, className) => {
        el.classList.remove(className);
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

    const isLightTurnedOn = (color) => {
        return color === Constants.LIGHT_YELLOW || color === Constants.LIGHT_RED;
    };

    return {
        showErrorMessage: (errorMessage) => {
            document.getElementById('berlinClock').innerHTML = errorMessage;
        },

        showBerlinTime: (berlinTime) => {
            let lights = document.querySelectorAll('.light');
    
            for (let berlinClockIndex = 0; berlinClockIndex < lights.length; berlinClockIndex ++) {
                if (isLightTurnedOn(berlinTime[berlinClockIndex])) {
                    toggleLight(lights[berlinClockIndex], 'on');
                } else {
                    toggleLight(lights[berlinClockIndex], 'off');
                }
            }
        },

        showDigitalTime: (digitalTime) => {
            document.getElementById('digitalClock').innerHTML = digitalTime;
        }
    };
};

export default ClockView;