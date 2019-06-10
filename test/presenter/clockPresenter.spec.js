import { expect } from 'chai';
import Clock from '../../src/presenter/clockPresenter';

describe('Berlin Clock', () => {
    it('Should throw an error when an invalid second is passed', () => {
        let isErrorMessage = false;
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
                    return '23:00:70';
                }
            };
        };
        const clock = Clock(spyView(), mockModel());

        clock.getBerlinTime();

        expect(isErrorMessage).to.be.true;
    });
}); 