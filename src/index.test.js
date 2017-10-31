import {expect} from 'chai';
import jsdom from 'jsdom/lib/old-api';
import fs from 'fs';

describe('our first test', () => {
  it('should pass',()=>{
    expect(true).to.equal(true);
  });
});

// done() parameter is the mocha callback to tell the check that DOM is done
describe('index.html', () => {
  it('should say hello',(done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello, world!");
      done();
      window.close();
    });
  });
});
