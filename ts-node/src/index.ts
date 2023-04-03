/*import {Hero} from './classes/Hero' 
import powers,{Power} from './data/powers';
import { printObject, genericFunction, genericFuntionArrow } from './generics/generics';
import { HeroInterface,Villain } from './interfaces';

//import {Hero as SuperHero} from './classes/Hero'  
//import * as HeroClasses from './classes/Hero'   Todo los exports del ts
//import { HeroInterface } from './interfaces/hero';
//import { Villain } from './interfaces/villain';
import { getPokemon } from './generics/get-pokemon';

console.log('Hola Mundo!');

const ironman = new Hero('Ironman',1,43);

console.log('Hero: ',ironman);
console.log(powers);
console.log(ironman.power);

printObject(123);
printObject(new Date());
printObject([1,2,3,4,5,6,7,8,9,10]);
printObject({a:1,b:2});

console.log(genericFunction(3.141618).toFixed(2));

console.log(genericFuntionArrow('Hola mundo').length);


const deapool = {
    name: 'Deapool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFuntionArrow<HeroInterface>(deapool).realName);
*/
/*
import { getPokemon } from "./generics/get-pokemon";

getPokemon(1)
.then((resp) => console.log(resp))
.catch(error => console.log(error))
.finally(()=>console.log('Fin de getPokemon'));
]
*/

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');
//(Pokemon.prototype as any).custonName = 'Pikachu';

console.log(charmander);
charmander.publicApi='Test';
console.log(charmander);
charmander.savePokemonToDB(3);