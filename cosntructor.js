function person (name){
    this.name=name;
    console.log(this.name);
}
//let person=(name)=> console.log(name); //error
let sakib=new person('Sakib');
console.log(typeof sakib);
//ternary operator
let type= (typeof sakib=='object')?'sakib is an object':'sakib is not an object';
console.log(type);