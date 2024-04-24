function log(anything){
    console.log(anything);
}
let mySet= new Set();//constructor syntax
mySet.add(5);
mySet.add(4);
mySet.add(`hello`);
log(mySet);
log(mySet.has('hello'));
log(mySet.entries());
mySet.add(3).add(2).add(1).delete(2);
log(mySet);
log(mySet.size);
//mySet.clear();
let myArr=[24,5,4,32];
mySet=new Set(myArr);
let yourSet=new Set('bangladesh');
log(mySet);
log(yourSet);
for(let value of mySet){
    log(value);
}