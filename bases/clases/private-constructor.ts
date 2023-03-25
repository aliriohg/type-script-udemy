(() => {
  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!this.instance) {
        this.instance = new Apocalipsis("Soy apocalipsis el unico");
      }
      return this.instance;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  console.log(apocalipsis);
})();
