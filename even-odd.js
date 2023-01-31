// peter's school teacher asked him to write a program that waould return true if a number is even and false if a number is odd. Help peter write the program.

let number;
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
number = isEven(34);
console.log(number);
number = isEven(37);
console.log(number);
