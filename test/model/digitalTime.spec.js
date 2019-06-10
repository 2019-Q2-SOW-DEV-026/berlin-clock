import { expect } from 'chai';
import DigitalTime from '../../src/model/digitalTime';

describe('Digital Time Model', () => {
    it('Should prepend 0 to the number if its less than 10', () => {
        const number = DigitalTime().prependZero(1);
        
        expect(number).to.equal('01');
    });

    it('Should return the time in "HH:MM:SS" format', () => {
        let date = new Date();
        date.setMinutes(1);
        date.setHours(20);
        date.setSeconds(40);

        const digitalTime = DigitalTime().getTime(date);

        expect(digitalTime).to.equal('20:01:40');
    });
});