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

    describe('Seconds Lamp', () => {
        it('Should be displayed', () => {
            expect(document.getElementById('secondsLamp')).to.not.be.null;
        });
    
        it('Should turn on during even seconds', () => {
            clockView.setBerlinTime('YOOOOOOOOOOOOOOOOOOOOOOO');
    
            let secondsLamp = document.querySelectorAll('#secondsLamp .light')[0];
            expect(secondsLamp.classList.contains('on')).to.be.true;
        });
    
        it('Should turn off during odd seconds', () => {
            clockView.setBerlinTime('OOOOOOOOOOOOOOOOOOOOOOOO');
    
            let secondsLamp = document.querySelectorAll('#secondsLamp .light')[0];
            expect(secondsLamp.classList.contains('off')).to.be.true;
        });
    });

    describe('Five hours row', () => {
        it('Should display 4 lamps', () => {
            expect(document.querySelectorAll('#fiveHourRow .light').length).to.equal(4);
        });
    
        it('Should turn on its respective lamp if its Berlin Clock color status is R', () => {
            clockView.setBerlinTime('OROOOOOOOOOOOOOOOOOOOOOO');
    
            let secondsLamp = document.querySelectorAll('#fiveHourRow .light')[0];
            expect(secondsLamp.classList.contains('on')).to.be.true;
        });
    
        it('Should turn off its respective lamp if its Berlin Clock color status is O', () => {
            clockView.setBerlinTime('OOOOOOOOOOOOOOOOOOOOOOOO');
    
            let secondsLamp = document.querySelectorAll('#fiveHourRow .light')[0];
            expect(secondsLamp.classList.contains('off')).to.be.true;
        });
    });
});