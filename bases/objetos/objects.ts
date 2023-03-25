(()=>{
    type Hero = {name:string,age:number,powers:string[],getName?:()=>string};


    let flash:Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad','Viajar en el tiempo']
    };

    let superman:Hero = {
        name: 'Clark ken',
        age: 30,
        powers: ['Super fuerza'],
        getName(){
            return this.name;
        }
    };

    console.log(superman);


})()