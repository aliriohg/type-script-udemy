(()=>{
    let isSuperman: boolean=true;
    console.log('boolean: ',isSuperman);

    let age:number = 28;
    let high:number = 1.78;
    let salary:number = 10000000;

    console.log('age: ',age,' high: ',high,' salary: ',salary);

    let name:String = 'Alirio';
    let lastName:String = "Hernandez";
    let fullName:String = `${name}  ${lastName}`;

    console.log('name: ',name,' lastName: ',lastName,' fullName: ', fullName.toUpperCase());

    //null check
    console.log('nullCheck ?: ',name[10]?.toUpperCase || 'null in this position');

    let anyValue:any = 'any';
    console.log('any value string: ',anyValue);
    anyValue = 100;
    console.log('any value number: ',anyValue);

    let listNumber:number[] = [1,2,3,4,5,6,7,8,9];
   // let listNumber:(number|string|boolean)[] = [1,2,3,4,5,6,7,8,9];
    listNumber.push(10);
    //listNumber.forEach(i=>console.log(i));
    console.log('list number: ',listNumber);

    const tuplas:[string,number]=['Alirio',30];
    console.log(tuplas);

    enum AudioLevel {
        min = 1,medium = 5,max = 10
    }

    let currentAudio = AudioLevel.medium;
    console.log('AudioLevel: ',currentAudio);
    currentAudio = AudioLevel.max;
    console.log('AudioLevel: ',currentAudio);


    function callVoid():void{

    }
    const callFlecha = ():void=>{

    }
    const a = callVoid();
    console.log(a);

    const error = (message:string):never =>{
        throw new Error(message);
    }
    error('Auxilio');

    let nada: undefined = undefined;
    console.log('undefined: ',nada);

    let nullValue:null = null;
    console.log('null: ',nullValue);

})();