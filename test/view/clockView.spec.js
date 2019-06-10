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

    describe('Seconds Lamp', () => {
        it('Should be displayed', () => {
            expect(document.getElementById('secondsLamp')).to.not.be.null;
        });
    
        it('Should turn on during even seconds', () => {
            clockView.showBerlinTime('YOOOOOOOOOOOOOOOOOOOOOOO');
    
            let secondsLamp = document.querySelectorAll('#secondsLamp .light')[0];
            expect(secondsLamp.classList.contains('on')).to.be.true;
        });
    
        it('Should turn off during odd seconds', () => {
            clockView.showBerlinTime('OOOOOOOOOOOOOOOOOOOOOOOO');
    
            let secondsLamp = document.querySelectorAll('#secondsLamp .light')[0];
            expect(secondsLamp.classList.contains('off')).to.be.true;
        });
    });

    describe('Five hours row', () => {
        it('Should display 4 lamps', () => {
            expect(document.querySelectorAll('#fiveHourRow .light').length).to.equal(4);
        });
    
        it('Should turn on its respective lamp if its Berlin Clock color status is R', () => {
            clockView.showBerlinTime('OROOOOOOOOOOOOOOOOOOOOOO');
    
            let secondsLamp = document.querySelectorAll('#fiveHourRow .light')[0];
            expect(secondsLamp.classList.contains('on')).to.be.true;
        });
    
        it('Should turn off its respective lamp if its Berlin Clock color status is O', () => {
            clockView.showBerlinTime('OOOOOOOOOOOOOOOOOOOOOOOO');
    
            let secondsLamp = document.querySelectorAll('#fiveHourRow .light')[0];
            expect(secondsLamp.classList.contains('off')).to.be.true;
        });
    });
});