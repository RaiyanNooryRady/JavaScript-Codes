numbers=[23,4,4,3,22,4,5,1,44];
let x=numbers.filter((value,index,arr)=>{
console.log(`val: ${value}, index:${index}, array is ${arr}`);
return value>4;

});
console.log(numbers);
console.log(x);