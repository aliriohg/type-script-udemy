"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (mydate) => {
        return (isNaN(mydate.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Alirio'));
//# sourceMappingURL=main.js.map