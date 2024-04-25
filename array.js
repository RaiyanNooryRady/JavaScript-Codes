const arr=[11,20,1,5,7,2];
//const revArr=arr.reverse();//main array also changed
const revArr=arr.toReversed(); //main array not changed
console.log(revArr,'main array: ',arr);
//const removedElements=arr.splice(-3,2,2,7,8);
//console.log(removedElements,"main arr: ", arr);
const splicedElements=arr.toSpliced(1,3,9,5,3,2,1);
console.log(splicedElements);

const withRes=arr.with(1,43);
console.log(withRes, arr);

const compare=function(a,b){
    return a-b; //neg,pos,0
}
const sortedArr=arr.toSorted(compare);// not numeric sort
//const sortedArr=arr.sort();//arr.sort() dile main array sorted hoye jay
console.log(sortedArr,arr);