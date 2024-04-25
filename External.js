export const pi = 3.14159;
export const a = 2.9;
export const c = 345;
console.log("file from external js ", pi, a, c);
console.log("hello external");
export const d='default string';
//myF();
function myF(){
    console.log ('hello my function');
}
export default myF;
export function add(){
    console.log('adding');
}
export function remove(){
    console.log('removing');
}