import clockTemplate from '../templates/clock_template';

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

            if(lightSwitch === 'on'){
                removeClass(light, 'off');
                addClass(light, 'on');
            }else{
                removeClass(light, 'on');
                addClass(light, 'off');
            }
        },

        showDigitalTime: (digitalTime) => {
            document.getElementById('digitalClock').innerHTML = digitalTime;
        }
    };
};

export default ClockView;