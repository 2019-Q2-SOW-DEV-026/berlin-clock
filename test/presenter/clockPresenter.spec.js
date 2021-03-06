import { expect } from 'chai';
import Clock from '../../src/presenter/clockPresenter';

describe('Berlin Clock', () => {
    let clock, isErrorMessage, lightStatus, digitalTime;

    const initClockFor = (time) => {
        isErrorMessage = false;

        const spyView = () => {
            return {
                showErrorMessage: (errorMessage) => {
                    isErrorMessage = true;
                },
                toggleLight: (timeIndex, lightSwitch) => {
                    lightStatus = lightSwitch;
                },
                showDigitalTime: (time) => {
                    digitalTime = time;
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

        it("Should return 'ROOO' for '01' hours", function() {
            initClockFor('01:00:00');

            expect(clock.singleHoursRow()).to.equal('ROOO');
        });

        it("Should return 'RROO' for '02' hours", function() {
            initClockFor('02:00:00');

            expect(clock.singleHoursRow()).to.equal('RROO');
        });

        it("Should return 'RRRO' for '03' hours", function() {
            initClockFor('03:00:00');

            expect(clock.singleHoursRow()).to.equal('RRRO');
        });

        it("Should return 'RRRR' for '04' hours", function() {
            initClockFor('04:00:00');

            expect(clock.singleHoursRow()).to.equal('RRRR');
        });
    });

    describe("Five Minutes Row", () => {
        it("Should return 'OOOOOOOOOOO' for '00' minute", function() {
            initClockFor('00:00:00');

            expect(clock.fiveMinutesRow()).to.equal('OOOOOOOOOOO');
        });

        it("Should return 'YOOOOOOOOOO' for '05' minute", function() {
            initClockFor('00:05:00');

            expect(clock.fiveMinutesRow()).to.equal('YOOOOOOOOOO');
        });

        it("Should return 'YYOOOOOOOOO' for '10' minute", function() {
            initClockFor('00:10:00');

            expect(clock.fiveMinutesRow()).to.equal('YYOOOOOOOOO');
        });

        it("Should return 'YYROOOOOOOO' for '15' minute", function() {
            initClockFor('00:15:00');

            expect(clock.fiveMinutesRow()).to.equal('YYROOOOOOOO');
        });

        it("Should return 'YYRYYRYOOOO' for '35' minutes", function() {
            initClockFor('00:35:00');

            expect(clock.fiveMinutesRow()).to.equal('YYRYYRYOOOO');
        });
    });

    describe("Single Minutes Row", () => {
        it("Should return 'OOOO' for '00' minute", function() {
            initClockFor('00:00:00');

            expect(clock.singleMinutesRow()).to.equal('OOOO');
        });

        it("Should return 'YOOO' for '01' minutes", function() {
            initClockFor('00:01:00');

            expect(clock.singleMinutesRow()).to.equal('YOOO');
        });

        it("Should return 'YYOO' for '02' minutes", function() {
            initClockFor('00:02:00');

            expect(clock.singleMinutesRow()).to.equal('YYOO');
        });

        it("Should return 'YYYO' for '03' minutes", function() {
            initClockFor('00:03:00');

            expect(clock.singleMinutesRow()).to.equal('YYYO');
        });

        it("Should return 'YYYY' for '04' minutes", function() {
            initClockFor('00:04:00');

            expect(clock.singleMinutesRow()).to.equal('YYYY');
        });
    });

    it("Should return 'YOOOOOOOOOOOOOOOOOOOOOOO' for '00:00:00' digital time", function() {
        initClockFor('00:00:00');

        expect(clock.getBerlinTime()).to.equal('YOOOOOOOOOOOOOOOOOOOOOOO');
    });

    it("Should return 'ORRRRRRROYYRYYRYYRYYYYYY' for '23:59:59' digital time", function() {
        initClockFor('23:59:59');
        
        expect(clock.getBerlinTime()).to.equal('ORRRRRRROYYRYYRYYRYYYYYY');
    });

    it("Should call view.toggleLight with light status 'on' on calling showBerlinTime for berlinTime 'Y' ", function() {
        initClockFor('23:59:59');

        clock.showBerlinTime('Y');

        expect(lightStatus).to.equal('on');
    });

    it("Should call view.toggleLight with light status 'off' on calling showBerlinTime for berlinTime 'N' ", function() {
        initClockFor('23:59:59');

        clock.showBerlinTime('N');

        expect(lightStatus).to.equal('off');
    });

    it("Should call view.setDigitalTime on calling showTime", function() {
        initClockFor('23:59:59');

        clock.showTime();

        expect(digitalTime).to.equal('23:59:59');
    });
}); 