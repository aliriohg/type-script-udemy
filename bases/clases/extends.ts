(() => {
  class Avenger {
    constructor(protected name: string, protected realName: string) {}

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger{
    constructor(
        name:string,realName:string,
        private isMutant:boolean,
    ){
        super(name,realName);
        this.isMutant = isMutant;
    }

    get fullName(){
        return `${this.name}-${this.realName}`;
    }

    set fullName(name:string){
      this.name=name;
    }

    getFullNameFromXmen(){
      console.log( super.getFullName());
    }
  }

  const wolverin = new Xmen('Wolverin','Logan',true);
  console.log(wolverin);
  console.log(wolverin.fullName);
  wolverin.fullName = 'newName';
  console.log(wolverin.fullName);


})();
