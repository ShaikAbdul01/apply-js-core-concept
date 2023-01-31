function in_feet(inch){
    var feet= inch/12;
    return feet;
}
// in_feet(84);
// in_feet(100);
let myFeet=in_feet(80);
console.log('MY Feet: ',myFeet.toFixed(2));
let frindFeet=in_feet(70);
console.log('Friend: ',frindFeet.toFixed(2));


// Another 
// let myInch=200;
// let myFeet=myInch/12;
// console.log('Feet :',myFeet.toFixed(2));