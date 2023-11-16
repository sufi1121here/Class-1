// Q11
// let names=['Ahmed', 'Ali', 'Butt'];
// console.log(names[0]);
// // Q12
// let names=['Ahmed', 'Ali', 'Butt'];
// for(let name of names){
//     //print a personalized message for each friend
//     console.log(`Hello Sir ${name}, I hope you are enjoying your work!`);
// }
// // Q13
// let favTransport: Array<[transport:string, brand:string]>=[]
// favTransport.push(["Motorbike", "Honda125"])
// favTransport.push(["Car", "Parado"])
// // console.log(favTransport);
// // using for each loop to print a series
// favTransport.forEach(([transport, brand]) => {
//     console.log(`I am going to buy ${brand} ${transport}`);
// });
// // Q14
// let guestList=["Babar Azam", "Fakhar Zaman", "Rizwan", "Ronaldo", "Tesla"]
// guestList.forEach(guestName => {
//     console.log(`Dear ${guestName}, you are very special for me, please join us.`);
// });
// // 15
// let guestList=["Allama Iqbal","Ali","Raees"];
// let guest="Allama Iqbal";
// console.log(`${guest} can't come for dinner.`);
// // Replace the name with a new guest
// let newGuest="Liaquat Ali"
// let indexofguest= guestList.indexOf(guest)
// if(indexofguest !==-1){
//     guestList[indexofguest]=newGuest
// }
// // console.log(guestList[0]);
// // Second invitation message
// console.log("***Second set of invitation message***");
// guestList.forEach((guest:string) => {
//     console.log(`Dear ${guest}, you are invited to dinner.`); 
// });
// // Q16
// let guestList=["Allama Iqbal","Ali","Raees"];
// for(let guest of guestList){
//     console.log(`Dear ${guest}, we found a bigger table.`);
// }
// // step2: add new guest
// let newGuestAtBeginning="Nickola Tesla"
// guestList.unshift(newGuestAtBeginning)
// // step3: add one guest to middle
// let newGuestInMiddle="Einstein"
// let middle= Math.floor(guestList.length/2)
// guestList.splice(middle, 0, newGuestInMiddle)
// // step4: use append()
// let newGuestAtEnd="Usman"
// guestList.push(newGuestAtEnd)
// // Last Step: new set of invitation
// console.log("\n*** New set of invitation messages ***\n");
// for(let guest of guestList){
//     console.log(`Dear ${guest}, please come for dinner.`);
// }
// // Q17
// let guestList=["Allama Iqbal","Ali","Raees","Usman","Ahmed"];
// console.log("*** I can invite only two people for dinner ***");
// // 2nd step:
// while(guestList.length > 2){
//     let removeGuest= guestList.pop()
//     console.log((`Sorry, ${removeGuest}, I can't invite you foe dinner.`));    
// }
// // step3:
// for(let guest of guestList){
//     console.log(`Hello, ${guest}, you are still invited for dinner`);
// }
// //step4: empty array
// guestList.pop()
// guestList.pop()
// console.log(`Guest list:`,guestList);
// //Q18
// let travel=["Itlay","Mexico","UAE","France","Tokyo"]
// // Print array in is original order
// console.log("\nOriginal Order: ",travel);
// // Print array in alphabetical order
// console.log("\nAlphabetical Order: ", [...travel].sort());
// // Step4: Showing array is still in its original order
// console.log("\nShowing array is still in its original order: ", travel);
// // step5: Print your array in reverse alphabetical order
// console.log("\nPrint array in reverse alphabetical order: ",[...travel].sort().reverse());
// //Step6: Array in its original order:
// console.log("\nArray in its original order: ",travel);
// // Step7: Reverse the order of your list
// console.log("\nReverse the order of your list: ", travel.reverse());
// // Step8: Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log("\nReverse the order of your list again. Print its original order: ",travel.reverse());
// // Step9: Sort your array so it’s stored in alphabetical order
// console.log("\nSort your array so it’s stored in alphabetical order: ",travel.sort());
// // Step10: Sort to change your array so it’s stored in reverse alphabetical order.
// console.log("\nSort to change your array so it’s stored in reverse alphabetical order:\n");
// console.log(travel.sort().reverse());
// // Q19
// let guestList=["Allama Iqbal","Ali","Raees"];
// guestList.forEach((guest:string) => {
//     console.log(`Dear ${guest}, you are invited to dinner.`); 
// });
// console.log(`\n*** Printing message indicating number of guest ***`);
// console.log(`We had finally invited ${guestList.length} guest`);
// Q20
var countries = ["Malaysia", "Turkey", "Palestine", "Indonesia", "Russia", "USA"];
console.log("List of Countries: ");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log(country);
}
