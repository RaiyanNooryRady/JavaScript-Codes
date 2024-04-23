let arr=[3,4,3,29];
// let newArr=arr.map((value)=>{

//     return value*2;
// });
let newArr= arr.map((value)=> value*2);
console.log(newArr);
let sum= arr.reduce((prevVal,newVal,currentInd,arr)=>{
  return prevVal+newVal;
},0);
console.log(sum);