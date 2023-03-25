(() => {
  class Avenger {
    constructor(name='No name', poder=0) {
      this.name = name;
      this.poder = poder;
    }
  }

  class FlyingAvenger extends Avenger{
    constructor(name='No name', poder=0){
        super(name,power);
        this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk',9001);
  const falcon = new FlyingAvenger('Falcon',300);

  console.log(hulk);
})();
