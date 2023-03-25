(() => {
  const hero: string = "flash";

  function returnName(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return "Batiseñal activada!";
  };

  console.log(typeof activateBatisignal);

  const heroName = returnName();

  //args
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Tony", "Stark");
  console.log({ name });

  const fullNameOptional = (firstName: string, lastName?: string):string=>{
    return `${firstName} ${lastName || '------'}`;
  }
  const nameOpt = fullNameOptional("Tony");
  console.log({ nameOpt });


  const fullNameDefaultParam = (firstName: string, upper: boolean = false,lastName?: string):string=>{
   if(upper){
    return `${firstName} ${lastName || '------'}`.toUpperCase();
   }
   return `${firstName} ${lastName || '------'}`;
  }
  let nameDefaultParam = fullNameDefaultParam("Tony",true);
  console.log({ nameDefaultParam });
  nameDefaultParam = fullNameDefaultParam("Tony");
  console.log({ nameDefaultParam });

  const fullNameRest = (firstName: string, ...restArgs: string[] ): string => {
    return `${firstName} ${restArgs.join(' ')}`;
  };

  const nameRest = fullNameRest("Tony", "Stark","Patricio");
  console.log({ nameRest });
})();
