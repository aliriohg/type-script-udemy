(()=>{
type Avenger = {
    name:string,
    weapon: string
}

const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit'
}

const capAmenirca: Avenger = {
    name: 'Cap. America',
    weapon: 'Shield'
}

const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
}

const avengers: Avenger[] = [ironman,capAmenirca,thor];

for (const avenger of avengers) {
    console.log(avenger);
}
 




})()