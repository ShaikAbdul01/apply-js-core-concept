// 1!=1
// 2!=2*1
// 3!=3*2*1// 3*(3-1)*(3-2)

function factioral(numbers){
    let result=1;
    for(i = numbers; i>=1;i--){
        result*=i;
        console.log(i);
    }
    return result;
}
let number=10;
let fact=factioral(number);
console.log("Factorial: ",number,fact);

