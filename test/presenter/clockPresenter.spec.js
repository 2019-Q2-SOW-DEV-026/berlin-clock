import { expect } from 'chai';
import Clock from '../../src/presenter/clockPresenter';

describe('Berlin Clock', () => {
    let clock, isErrorMessage;

    const getClockFor = (time) => {
        isErrorMessage = false;

        const spyView = () => {
            return {
                setErrorMessage: (errorMessage) => {
                    isErrorMessage = true;
                }
            };
        };
        const mockModel = () => {
            return {
                getTime: () => {
                    return time;
                }
            };
        };
        clock = Clock(spyView(), mockModel());
    };
        

    it('Should throw an error when an invalid second is passed', () => {
        getClockFor('23:00:70');

        clock.getBerlinTime();

        expect(isErrorMessage).to.be.true;
    });

    it('Should throw an error when an invalid minute is passed', () => {
        getClockFor('23:70:00');
        
        clock.getBerlinTime();

        expect(isErrorMessage).to.be.true;
    });
}); 