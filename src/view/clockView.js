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

    return {
        showErrorMessage: (errorMessage) => {
            document.getElementById('berlinClock').innerHTML = errorMessage;
        },

        toggleLight: (lightIndex, lightSwitch) => {
            let light = document.querySelectorAll('.light')[lightIndex];

            removeClass(light, 'off');
            removeClass(light, 'on');
            addClass(light, lightSwitch === Constants.TURN_ON_LIGHT ? 'on' : 'off');
        },

        showDigitalTime: (digitalTime) => {
            document.getElementById('digitalClock').innerHTML = digitalTime;
        }
    };
};

export default ClockView;