let p=5,q=3,r=p*q;

const person={
    name:'MR',
    age:34,
    gender:'male',
    address:'Sylhet',
    p,q,r //object shorthand
}
for(x in person){
    console.log(`${x} of person is ${person[x]}`);
}
const terson=[2,45,5,3,3];
for(x of terson){
    console.log(x);
}
const str=`hello world go to there`;
for (ch of str){
    console.log(ch);
}
let keys=Object.keys(person);
let values=Object.values(person);
let entries=Object.entries(person);
//console.log(keys,' ',values,' ',entries);
for(value of keys){
    console.log(person[value]);
}