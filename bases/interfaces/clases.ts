(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }
  interface Human {
    age: number;
  }
  class Mutant implements Xmen, Human {
    public name: string;
    public realName: string;
    public age:number;

    constructor(name: string, realName: string, age: number) {}
    mutantPower(id: number): string {
      return this.name+ ' '+this.realName; 
    }
  }

  const wolverin = new Mutant("Wolverin", "Logan", 40);
})();
