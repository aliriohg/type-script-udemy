"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
    }
    class Villian extends Mutante {
    }
    const wolverine = new Xmen('Wolverin', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    console.log('---', wolverine);
    console.log('---', magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.age;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.age = 35;
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
    console.log(antman);
    console.log(antman.bio());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name}-${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverin = new Xmen('Wolverin', 'Logan', true);
    console.log(wolverin);
    console.log(wolverin.fullName);
    wolverin.fullName = 'newName';
    console.log(wolverin.fullName);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!this.instance) {
                this.instance = new Apocalipsis("Soy apocalipsis el unico");
            }
            return this.instance;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map