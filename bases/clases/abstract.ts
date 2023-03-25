(()=>{

    abstract class Mutante{
        constructor(
            public name:string,
            public realName:string

        ){

        }
    }

    class Xmen extends Mutante{

    }

    class Villian extends Mutante{

    }

    const wolverine:Mutante = new Xmen('Wolverin','Logan');
    const magneto:Mutante = new Villian('Magneto','Magnus');

    console.log('---',wolverine);
    console.log('---',magneto);

})()