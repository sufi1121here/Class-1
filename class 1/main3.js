// Q21
// let bioData = {
//     name : 'Sufi', // key: name ;  Sufi: value
//     Age : "21" ,
//     city : 'Dhaka' ,
//     getData : function() { // Obj. ma issay function nahi method kehtay hay
//         console.log(`My name is ${bioData.name} and my age is ${bioData.Age}`);
//     }
// }
// bioData.getData();
// Q22
// function createFruit(name: string, color: string, taste: string){
//     return{
//         name, color, taste
//     }
// }
// const fruits= [ createFruit("Apple", "Red", "Sweet"),
//     createFruit("Banana", "Yellow", "Sweet"),
//     createFruit("Orabge", "Orange", "Citrusy"),
//     createFruit("Grapes", "Green", "Sweet"),
//     createFruit("Strawberry", "Red", "Sweet")
// ];
// const invalidIndex = 10;
// console.log(`Fruit at Index ${invalidIndex}:`, fruits[invalidIndex]);
// fruits.forEach((fruit) => {
//     console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
// })
// // Q23   and   Q24
// let car = 'subaru'
// console.log("Is car == 'subaru'? I predict True");
// console.log(car == 'subaru');
// console.log("Is car == 'honda'? I predict False");
// console.log(car == 'honda');
// console.log("Is car === 'subaru'? I predict True");
// console.log(car === 'subaru');
// console.log("Is car === 'Subaru'? I predict False");
// console.log(car === 'Subaru');
// console.log("Is car !== 'honda'? I predict True");
// console.log(car !== 'honda');
// console.log("Is car !== 'subaru'? I predict False");
// console.log(car !== 'subaru');
// console.log("Is car != 'mazda'? I predict True");
// console.log(car != 'mazda');
// console.log("Is car != 'subaru'? I predict False");
// console.log(car != 'subaru');
// let age=23
// console.log("Is age > 18 ? I predict True");
// console.log(age > 18);
// console.log("Is age < 21 ? I predict False");
// console.log(age < 21);
// // Q24
// const str1= "Hello"
// const str2= "hello"
// console.log(str1===str2); //f
// // console.log(str1!==str2); //t
// // Lower case f
// const text= "Hello"
// const text2= "hello"
// console.log(text.toLocaleLowerCase()===text2); //t
// // Numerical test
// const num1= 15
// const num2= 5
// console.log(num1===num2); //f
// console.log(num1!==num2); //t
// console.log(num1<num2); //f
// console.log(num1>num2); //t
// console.log(num1<=num2); //f
// console.log(num1>=num2); //t
// // Tests using "and" and "or" operators
// const x=5
// const y=10
// const z=15
// console.log(x<y && y<z); //t
// console.log(x<y || y>z); //t
// console.log(x>y && y<z); //f
// console.log(x>y || y>z); //f
// // Test whether an item is in a array
// const fruits=['apple', 'banana', 'orange', 'pineapple']
// console.log(fruits.includes('banana'));//t
// console.log(fruits.includes('kiwi'));//f
// // Test whether an item is not in a array
// const colors=['red', 'blue', 'yellow', 'green']
// console.log(!colors.includes('purple'));//t
// console.log(!colors.includes('red'));//f
// // Q25
// let alienColor='green'
// if(alienColor === 'green'){
//     console.log(`Congratulations! You just earned 5 points for shooting the alien`);
// }
// // version 2
// alienColor='blue'
// if(alienColor === 'blue'){
//     console.log('Congratulations! You just earned 5 points for shooting the alien');
// }
// // Q26
// let alienColor='green'
// if(alienColor === 'green'){
//     console.log(`Congratulations! You just earned 5 points for shooting the alien`);
// } else{
//     console.log(`Congratulations! You just earned 10 points for shooting the alien`);
// }
// console.log(`\n2nd Version:`);
// // version 2
// alienColor='blue'
// if(alienColor === 'red'){
//     console.log('Congratulations! You just earned 5 points for shooting the alien');// print else
// } else{
//     console.log(`Congratulations! You just earned 10 points for shooting the alien`);
// }
// // Q27
// console.log(`\n*** 1st version where colour is green ***`);
// let alien_color='green'
// if(alien_color==='green'){
//     console.log(`Congratulations! You just earned 5 points for shooting the alien`);
// } else if(alien_color==='yellow'){
//     console.log(`Congratulations! You just earned 10 points for shooting the alien`);
// } else if(alien_color==='red'){
//     console.log(`Congratulations! You just earned 15 points for shooting the alien`);
// }else{
//     console.log('** Unknown alien color **');
// }
// // versio 2nd
// console.log(`\n*** 2nd version where colour is yellow ***`);
// alien_color='yellow'
// if(alien_color==='green'){
//     console.log(`Congratulations! You just earned 5 points for shooting the alien`);
// } else if(alien_color==='yellow'){
//     console.log(`Congratulations! You just earned 10 points for shooting the alien`);
// } else if(alien_color==='red'){
//     console.log(`Congratulations! You just earned 15 points for shooting the alien`);
// }else{
//     console.log('** Unknown alien color **');
// }
// //version 3rd
// console.log(`\n*** 3rd version where colour is yellow ***`);
// alien_color='red'
// if(alien_color==='green'){
//     console.log(`Congratulations! You just earned 5 points for shooting the alien`);
// } else if(alien_color==='yellow'){
//     console.log(`Congratulations! You just earned 10 points for shooting the alien`);
// } else if(alien_color==='red'){
//     console.log(`Congratulations! You just earned 15 points for shooting the alien`);
// }else{
//     console.log('** Unknown alien color **');
// }
// // Q28
// let age=50
// console.log(`1st Test.`);
// if(age<2){
//     console.log("The person is a baby");
// } else if(age<4){
//     console.log('The person is a toddler');
// } else if(age<13){
//     console.log('The person is a kid');
// } else if(age<4){
//     console.log('The person is a teenager');
// } else if(age<4){
//     console.log('The person is an audlt');
// }else{
//     console.log('The person is an elder');
// }
// let age2=1
// console.log(`\n2nd Test.`);
// if(age2<2){
//     console.log("The person is a baby");
// } else if(age2<4){
//     console.log('The person is a toddler');
// } else if(age2<13){
//     console.log('The person is a kid');
// } else if(age2<4){
//     console.log('The person is a teenager');
// } else if(age2<4){
//     console.log('The person is an audlt');
// }else{
//     console.log('The person is an elder');
// }
// // Q29
// const fav_fruits=["grapes", "mango", 'banana']
// if(fav_fruits.includes('grapes')){
//     console.log("I like grapes");
// }
// if(fav_fruits.includes('mango')){
//     console.log("I like to eat sweet mangoes");
// }
// if(fav_fruits.includes('banana')){
//     console.log("I ate banana");
// }
// if(fav_fruits.includes('apple')){
//     console.log("I likes apples");
// }
// if(fav_fruits.includes('orange')){
//     console.log("Oranges are my favourite");
// }
// // Q30
// const userNames=['admin', 'Newton', 'Sikander', 'Raees', 'ALi']
// function greetUsers(){
//     for(const i in userNames){
//         if(userNames[i].toLocaleLowerCase()==='admin'){
//             console.log(`Hello Admin, would you like see a report.`);
//         }else{
//             console.log(`Hello ${userNames[i]}, thank you for login.`);
//         }
//     }
// }
// greetUsers()
// // Q31
// let userNames=['admin', 'Newton', 'Sikander', 'Raees', 'ALi']
// function greetUsers(userNames){
//     if(userNames.length === 0){
//         console.log('We need to find users.');
//     }
//     for(const i in userNames){
//         if(userNames[i].toLocaleLowerCase()==='admin'){
//             console.log(`Hello Admin, would you like see a report.`);
//         }else{
//             console.log(`Hello ${userNames[i]}, thank you for login.`);
//         }
//     }
// }
// console.log(`For non-empty username:\n`);
// greetUsers(userNames)
// userNames=[]
// console.log(`\nFor empty username:\n`);
// greetUsers(userNames)
// Q32
var currentusers = ['Admin', 'Newton', 'Sikander', 'Raees', 'ALi', 'Mubashir'];
var newusers = ['Admin', 'Newton', 'Sikander', 'Usama', 'Mubashir', 'Tariq'];
function checkUserName(currentusers) {
    var lowercaseCurrentUsers = currentusers.map(function (user) { return user.toLowerCase(); });
    for (var _i = 0, newusers_1 = newusers; _i < newusers_1.length; _i++) {
        var newUser = newusers_1[_i];
        var lowercaseNewUser = newUser.toLocaleLowerCase();
        if (lowercaseCurrentUsers.includes(lowercaseNewUser)) {
            console.log("Username, ".concat(newUser, " is already taken.\n"));
        }
        else {
            console.log("Username \"".concat(newUser, "\" is available.\n"));
        }
    }
}
checkUserName(currentusers, newusers);