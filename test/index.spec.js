import { expect } from 'chai';
import jsdom from 'mocha-jsdom';

describe('Berlin Clock', () => {
    jsdom({ 
        url: "http://localhost"
    });

    it('Sample Test Case', () => {
        var div = document.createElement('div');
        expect(div.nodeName).to.equal('DIV');
    });
});