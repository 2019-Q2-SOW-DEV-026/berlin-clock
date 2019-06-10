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

    it('Should turn off seconds lamp during odd seconds', () => {
        clockView.setBerlinTime('OOOOOOOOOOOOOOOOOOOOOOOO');

        let secondsLamp = document.querySelectorAll('#secondsLamp .light')[0];
        expect(secondsLamp.classList.contains('off')).to.be.true;
    });

    it('Should display five hours row with 4 lamps', () => {
        expect(document.querySelectorAll('#fiveHourRow .light').length).to.equal(4);
    });

    it('Should turn on lamp in five hours row if its respective Berlin Clock color status is R', () => {
        clockView.setBerlinTime('OROOOOOOOOOOOOOOOOOOOOOO');

        let secondsLamp = document.querySelectorAll('#fiveHourRow .light')[0];
        expect(secondsLamp.classList.contains('on')).to.be.true;
    });

    it('Should turn off lamp in five hours row if its respective Berlin Clock color status is O', () => {
        clockView.setBerlinTime('OOOOOOOOOOOOOOOOOOOOOOOO');

        let secondsLamp = document.querySelectorAll('#fiveHourRow .light')[0];
        expect(secondsLamp.classList.contains('off')).to.be.true;
    });
});