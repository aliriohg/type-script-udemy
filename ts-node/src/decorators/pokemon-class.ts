function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (condition: boolean): Function => {
  if (condition) {
    return () => console.log("Hola Mundo");
  }
  return () => {};
};

const blockPrototipe = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

const CheckValidPokemonId = (): Function => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    // console.log({ target, propertyKey, descriptor });
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El id del pokemon debe de estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
  };
};

const readOnly = (isWritable: boolean = true): Function => {
  return function (
    target: any,
    propertyKey: string  ) {

       const descriptor: PropertyDescriptor={
        get(){
            console.log(this);
            return 'Fernando';
        },
        set(this,val){
            Object.defineProperty(this,propertyKey,{
                value:val,
                writable:!isWritable,
                enumerable:false
            });
        }
       } 
  };
};

//@printToConsole
//@blockPrototipe
@printToConsoleConditional(true)
export class Pokemon {
  @readOnly(true)
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log("Save pokemon to DB ", id);
  }
}
