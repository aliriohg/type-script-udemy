"use strict";
(() => {
    var _a;
    let isSuperman = true;
    console.log('boolean: ', isSuperman);
    let age = 28;
    let high = 1.78;
    let salary = 10000000;
    console.log('age: ', age, ' high: ', high, ' salary: ', salary);
    let name = 'Alirio';
    let lastName = "Hernandez";
    let fullName = `${name}  ${lastName}`;
    console.log('name: ', name, ' lastName: ', lastName, ' fullName: ', fullName.toUpperCase());
    console.log('nullCheck ?: ', ((_a = name[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase) || 'null in this position');
    let anyValue = 'any';
    console.log('any value string: ', anyValue);
    anyValue = 100;
    console.log('any value number: ', anyValue);
    let listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    listNumber.push(10);
    console.log('list number: ', listNumber);
    const tuplas = ['Alirio', 30];
    console.log(tuplas);
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log('AudioLevel: ', currentAudio);
    currentAudio = AudioLevel.max;
    console.log('AudioLevel: ', currentAudio);
    function callVoid() {
    }
    const callFlecha = () => {
    };
    const a = callVoid();
    console.log(a);
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
    let nada = undefined;
    console.log('undefined: ', nada);
    let nullValue = null;
    console.log('null: ', nullValue);
})();
//# sourceMappingURL=tipos.js.map