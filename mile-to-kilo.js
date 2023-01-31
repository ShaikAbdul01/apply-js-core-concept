function mile_Kilo(mile){
    const miles=mile*1.61;
    return miles;
}
let dhaka_ctg = 455;
let dhaCtg=mile_Kilo(dhaka_ctg);
console.log('Kilomiter: ',dhaCtg.toFixed(2));