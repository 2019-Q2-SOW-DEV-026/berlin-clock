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
        clockView.showErrorMessage('Error Message');

        expect(document.getElementById('berlinClock').innerHTML).eql('Error Message');
    });

    it('Should display digital time', () => {
        clockView.showDigitalTime('11:23:34');

        expect(document.getElementById('digitalClock').innerHTML).eql('11:23:34');
    });

    it('Seconds Lamp should be displayed', () => {
        expect(document.getElementById('secondsLamp')).to.not.be.null;
    });

    it('Five hours row should display 4 lamps', () => {
        expect(document.querySelectorAll('#fiveHourRow .light').length).to.equal(4);
    });
});