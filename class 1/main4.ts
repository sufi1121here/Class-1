// Q33
// const numbers =[1 , 2, 3, 4, 5, 6, 7, 8, 9]
// for (const number of numbers) {
//     let ordinal: string;
//     if(number===1){
//         ordinal="st"
//     } else if(number===2){
//         ordinal="nd"
//     } else if(number===3){
//         ordinal="rd"
//     }else{
//         ordinal="th"
//     }
// console.log(`${number}${ordinal}`);
// }


// //Q34
// const favPizza=['Pepperoni', 'Fajita', 'BBQ']
// console.log("My favouritepizza is: ");
// for (let x=0; x < favPizza.length; x++){
//    console.log(favPizza[x]);
// }

// console.log(`\nI like these pizza: `)
// for (let x=0; x < favPizza.length; x++){
//     console.log(favPizza[x]);
//  }
// console.log(`\n***I really love pizza!***`);


// // Q35
// const animals=['cat', 'dog', 'goat']
// console.log("list of animals:");
// for(const i of animals){
//     console.log(i);
// }

// console.log("\nStatements about each animal:");
// for (const animal of animals) {
//     if(animal==='dog'){
//         console.log(`A ${animal} is a great pet.`);
//     } else if(animal==='cat'){
//         console.log(`A ${animal} is very cute and loves to be petted.`);
//     } else if(animal==='goat'){
//         console.log(`A ${animal} is an adorable pet.`);
//     }
// }
// // Common characteristics
// console.log("\nWhat these animals have in common:");
// console.log("\nAny of these animals would make a great pet!");



// // Q36
// const makeshirt=(size:string, message:string): void=>{
//     console.log(`Size:${size}, Message:${message}`);
//     // return `Size:${size}, Message:${message}`
// }
// // Call the funstion
// let size="XL"
// let message="Rado"
// makeshirt(size,message)
// // makeshirt("XL","rado")  // Directly call f




// // Q37
// const make_shirt=(size:string="Large", message:string="I love Typescript"): void=>{
//     return console.log(`Size:${size}, Message:${message}`)
// }
// // Call the funstion
// make_shirt()
// // Medium size shirt message
// make_shirt("Medium")
// // small size shirt messsage
// make_shirt("Small", "Hi! TypeScript")



// // Q38
// function describe_city(city:string, country:string="Unknown Country"):void{
//     console.log(`${city} is in ${country}.`);
// }
// // Calling the f
// describe_city('Tokyo');
// describe_city('Karachi', 'Pakistan');
// describe_city('London', 'United Kingdom');



// // Q39
// const city_country=(city:string, country:string):string =>{
//     return`${city}, ${country}`
// }
// console.log(city_country('Port Moresby','Papua New Guinea'))
// console.log(city_country('"Kathmandu','Nepal"'))
// console.log(city_country('Tallinn','Estonia'))



// // Q40
// function make_album(artist:string, title:string, tracks:string){
//     const album={
//         artist, title, tracks
//     }
//     if(tracks!== undefined){
//         album.tracks= tracks
//     }
//     return album
// }
// const album1=make_album("The Beatles", "Please Please Me")
// const album2=make_album("Making Mirrors", "Gotye", 15)
// const album3=make_album("Faded", "Alan Walker", 21)

// console.log(album1)
// console.log(album2)
// console.log(album3)



// // Q41
// const magicianNames=["Harry Potter", "Ron Weasely", "Hermione Ginger", "Albus Dumbledore"]
// function show_magicians(magicians: string[]):void{
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// show_magicians(magicianNames)


// // // Q42
// const magicianNames=["Harry Potter", "Ron Weasely", "Hermione Ginger", "Albus Dumbledore"]
// function showMagicians(magicians: string[]):void{
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// function makeGreat(magicians):string[]{
//     const greatMagicians:string[]=magicians.map(magician=> `The Great ${magician}`)
//     return greatMagicians
// }
// const greatMNames=makeGreat(magicianNames)
// console.log(`\nGREAT MAGICIANS:\n`)
// showMagicians(greatMNames)


// // Q43
// const magicianNames=["Harry Potter", "Ron Weasely", "Hermione Ginger", "Albus Dumbledore"]
// function showMagicians(magicians: string[]):void{
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// function makeGreat(magicians):string[]{
//     const greatMagicians:string[]=magicians.map(magician=> `The Great ${magician}`)
//     return greatMagicians
// }
// const greatMNames=makeGreat(magicianNames)
// console.log(`\nOriginal Magicians' Name:\n`);

// showMagicians(magicianNames)
// console.log(`\n\nGREAT MAGICIANS:\n`)
// showMagicians(greatMNames)



// // Q44
// function makeSandwich(...items):void{
//     console.log("Sandwich Summary:");
//     if(items.length===0){
//         console.log('  --You ordered an empty sandwich--');
//         } else{
//              items.forEach((item,index)=>{
//              console.log(`  ${index+1}. ${item}`);
//         })
//     }
//     console.log("\n");
// }

// makeSandwich()
// makeSandwich("Bread", "Tomato")
// makeSandwich("Ham", "Cheese", "Banana")
// makeSandwich("Turkey", "Mayonnaise", "Colddrink")


// Q45
function createCar(manufacturer: any, model: any, ...properties: any){
    const car: any={
        manufacturer, model
    }
    for(const[key, value] of properties){
        car[key]=value
    }
    return car;
}
const myCar=createCar("Honda", "Civic", ["Color", "Black"], ['Optional Feature',"Sunroof"],["Speed", '300 km/h'])
console.log(myCar);
