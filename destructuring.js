const user = {
    id: 1,
    name: "rady",
    age: 25,
    education: {
        degree: "BSc",
        institute: "RUET",
        // type: {
        //     department:"CSE",
        //     Roll:1703059
        // }
    },
    x: 5,
};

//const person=user.name;
const person = user["name"];
const variable = user["x"];
console.log(person, variable);

//destructuring
const { education: { type: { department: x } = {} } } = user;
console.log(x);
//console.log(user['education']['type']['department']);

const number = [2, 4, [5, 6, 8], 7, 5];
const [, a, [, b], , c] = number;
console.log(a, b, c);

let p=4,q=3;
//swap p,q
[q,p]=[p,q];
console.log(p,q);
var arr=[2,5,2,4,1];
var [,m,n,,o]=arr;
console.log(m,n,o);