import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import ClockView from '../../src/view/clockView';

describe('Berlin Clock View', () => {
    jsdom({
        url: 'http://localhost'
    });

    let clockView;

    beforeEach('', () => {
        clockView = ClockView(document.body);
    });

    it('Should display an error message in case of an exception', () => {
        clockView.setErrorMessage('Error Message');

        expect(document.getElementById('berlinClock').innerHTML).eql('Error Message');
    });

    it('Should display seconds lamp', () => {
        expect(document.getElementById('secondsLamp')).to.not.be.null;
    });

    it('Should turn on seconds lamp during even seconds', () => {
        clockView.setBerlinTime('YOOOOOOOOOOOOOOOOOOOOOOO');

        let secondsLamp = document.querySelectorAll('#secondsLamp .light')[0];
        expect(secondsLamp.classList.contains('on')).to.be.true;
    });
});