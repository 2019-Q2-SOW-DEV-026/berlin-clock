import { expect } from 'chai';
import Clock from '../../src/presenter/clockPresenter';

describe('Berlin Clock', () => {
    let clock, isErrorMessage;

    const initClockFor = (time) => {
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
        
    describe('Error Handling for Invalid Time', () => {
        it('Should throw an error when an invalid second is passed', () => {
            initClockFor('23:00:70');
    
            clock.getBerlinTime();
    
            expect(isErrorMessage).to.be.true;
        });
    
        it('Should throw an error when an invalid minute is passed', () => {
            initClockFor('23:70:00');
            
            clock.getBerlinTime();
    
            expect(isErrorMessage).to.be.true;
        });
    
        it('Should throw an error when an invalid hours is passed', () => {
            initClockFor('25:00:00');
            
            clock.getBerlinTime();
    
            expect(isErrorMessage).to.be.true;
        });
    });

    describe("Seconds lamp", () => {
        it("Should return 'Y' for even seconds", function() {
            initClockFor('00:00:00');

            expect(clock.secondsLamp()).to.equal('Y');
        });
    });
}); 