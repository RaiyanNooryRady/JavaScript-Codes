function log(anything) {
    console.log(anything);
}
let mySet = new Set();//constructor syntax
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
let myArr = [24, 5, 4, 32];
mySet = new Set(myArr); //array to set
let yourSet = new Set('bangladesh');
log(mySet);
log(yourSet);
for (let value of mySet) {
    log(value);
}
log([...mySet]);//set to array
let object = {
    a: 2,
    b: 3
}
log(mySet.add({
    a: 2,
    b: 3
}).add({
    a: 2,
    b: 3
}).add(object).add(object)); //see output.instead of 4 objects, 3 objects will be added because here object is used as reference. (for 1st and 2nd one they have different reference. for last two object they have same reference)
let newArr=[0,0,1,2,3,3,3,3,4,4,4,5,5,5,6,6,7,7,8,9,9,9];
let newSet= new Set(newArr);//array to set
log([...newSet]); //set to array. found elements of the array uniquely