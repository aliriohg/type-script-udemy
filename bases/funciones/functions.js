"use strict";
(() => {
    const hero = "flash";
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
    const fullNameOptional = (firstName, lastName) => {
        return `${firstName} ${lastName || '------'}`;
    };
    const nameOpt = fullNameOptional("Tony");
    console.log({ nameOpt });
    const fullNameDefaultParam = (firstName, upper = false, lastName) => {
        if (upper) {
            return `${firstName} ${lastName || '------'}`.toUpperCase();
        }
        return `${firstName} ${lastName || '------'}`;
    };
    let nameDefaultParam = fullNameDefaultParam("Tony", true);
    console.log({ nameDefaultParam });
    nameDefaultParam = fullNameDefaultParam("Tony");
    console.log({ nameDefaultParam });
    const fullNameRest = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const nameRest = fullNameRest("Tony", "Stark", "Patricio");
    console.log({ nameRest });
})();
//# sourceMappingURL=functions.js.map