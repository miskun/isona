/**
 * The main container for isona library
 **/
var isona = {};

if ( typeof module === 'object' ) {
    module.exports = isona;
} else if (typeof define === 'function' && define.amd) {
    define(function () {
        return isona;
    });
} else {
    window.isona = isona;
}

(function (isona) {

    isona.version = "0.1.0";

}(isona));