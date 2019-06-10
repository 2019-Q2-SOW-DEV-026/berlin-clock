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

        it("Should return 'O' for odd seconds", function() {
            initClockFor('00:00:59');

            expect(clock.secondsLamp()).to.equal('O');
        });
    });

    describe("Five Hours Row", () => {
        it("Should return 'OOOO' for '00' hour", function() {
            initClockFor('00:00:00');

            expect(clock.fiveHoursRow()).to.equal('OOOO');
        });

        it("Should return 'ROOO' for '05' hour", function() {
            initClockFor('05:00:00');

            expect(clock.fiveHoursRow()).to.equal('ROOO');
        });

        it("Should return 'RROO' for '10' hour", function() {
            initClockFor('10:00:00');

            expect(clock.fiveHoursRow()).to.equal('RROO');
        });

        it("Should return 'RRRO' for '15' hour", function() {
            initClockFor('15:00:00');

            expect(clock.fiveHoursRow()).to.equal('RRRO');
        });

        it("Should return 'RRRR' for '20' hour", function() {
            initClockFor('20:00:00');

            expect(clock.fiveHoursRow()).to.equal('RRRR');
        });
    });

    describe("Single Hours Row", () => {
        it("Should return 'OOOO' for '00' hour", function() {
            initClockFor('00:00:00');

            expect(clock.singleHoursRow()).to.equal('OOOO');
        });
    });
}); 