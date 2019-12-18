process.env.NODE_ENV = 'development';
import chai from 'chai';
import 'mocha';
import splitNumeric from '../index';

const expect: Chai.ExpectStatic = chai.expect;

describe ('Split Numeric', async function() {

    it('Should return array', function(done) {
        const alphaNumericString = '20pt10';
        const splitedArray = splitNumeric.split(alphaNumericString);

        expect(splitedArray).to.be.an('array');
        done();
    });

    it('Should return array of length 2', function(done) {
        const alphaNumericString = '0110';
        const splitedArray = splitNumeric.split(alphaNumericString);

        expect(splitedArray.length).to.equal(2);
        done();
    });

    it('Should return correct values after split', function(done) {
        const alphaNumericString = '300,5';
        const splitedArray = splitNumeric.split(alphaNumericString);

        expect(splitedArray[0]).to.equal('300');
        expect(splitedArray[1]).to.equal(',5');
        done();
    });
});
