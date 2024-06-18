let myMap= new Map();
myMap.set('key1','Bangladesh');
myMap.set('key2','India');
myMap.set('key3','srilanka');
myMap.set('key4','canada');
myMap.set('key5','Pakistan');
myMap.set('key6','Nepal');
myMap.set('key7','Australia');

//myMap.clear();

console.log(myMap.values());
console.log(myMap.keys());

myMap.delete('key1');
for(let myvalue of myMap.values()){
    console.log(myvalue);
}
for(let mykey of myMap.keys()){
    console.log(mykey);
    
}
for(let mykey of myMap.keys()){
    console.log(`value of ${mykey} is `+myMap.get(mykey));
}
if(myMap.has('key2')){
    console.log('yes');
}
else{
    console.log('no');
}