import ClockPresenter from './presenter/clockPresenter';
import ClockView from './view/clockView';
import DigitalTime from './model/digitalTime';

const berlinClockContainer = document.getElementById('container');
const clock = ClockPresenter(new ClockView(berlinClockContainer), new DigitalTime());

let updateClock;

(updateClock = () => {
    clock.showTime();

    window.requestAnimationFrame(updateClock);
})();