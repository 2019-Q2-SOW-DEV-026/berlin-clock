import { expect } from 'chai';
import DigitalTime from '../../src/model/digitalTime';

describe('Digital Time Model', () => {
    it('Should prepend 0 to the number if its less than 10', () => {
        const number = DigitalTime().prependZero(1);
        
        expect(number).to.equal('01');
    });
});