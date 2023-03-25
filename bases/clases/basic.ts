(() => {
  class Avenger {
    static age: number = 35;
    static getAvgAge(){
        return this.age;
    }
    constructor(
      private name: string,
      private team: string,
      private realName?: string
    ) {}

    bio(){
        return `${this.name} (${this.team})`
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  console.log(antman);
  console.log(antman.bio());

  
})();
