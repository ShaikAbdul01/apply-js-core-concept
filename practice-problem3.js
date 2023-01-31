// write a function findOddSum() that will take the array [5,6,7,10,45,30] as the input parameter and will return the sum of the odd numbers.

// All Sum 

// let sum=0;
// function arraySum(numbers){
//     for (let i= 0; i<= numbers.length;i++){
//         let index=i;
//         let element=numbers[i];
//         sum+=element;
//         console.log('Index: ',index,'Element: ',element,'Sum: ',sum);
//     }

// }
// let number=[34,23,64,75,33,754,49]
// arraySum(number);


// Odd Sum 

// let oddSum=0;
// function arrayOdd(numbers) {
//     const oddNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let index = i;
//     let element = numbers[index];
//     oddSum+=element;
//     if (element % 2!== 0) {
//       console.log(index, element,oddSum);
//       oddNumbers.push(element);
//     }
//   }
//   return oddNumbers;
// }
// let number = [34, 23, 64, 75, 33, 754, 49];
// arrayOdd(number);

// Even Sum 
let evenSum=0;
function arrayOdd(numbers) {
    const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    evenSum+=element;
    if (element % 2 == 0) {
      console.log(index, element,evenSum);
      evenNumbers.push(element);
    }
  }
  return evenNumbers;
}
let number = [34, 23, 64, 75, 33, 754, 49];
arrayOdd(number);
