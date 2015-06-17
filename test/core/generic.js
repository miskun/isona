var isona = require('../../build/isona.js');
var assert = require("assert");

describe('Core', function(){
    describe('#version', function(){
        it('Should return the version number as semver string', function(){
            assert.equal("string", typeof isona.version);
            assert.equal(3, isona.version.split(".").length);
        })
    })
});