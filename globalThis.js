function log(anything){
    console.log(anything);
}
globalThis.setTimeout(()=>console.log('hello'));
//in browser.. window
//in node js ..global
let ln=Number.MAX_SAFE_INTEGER;
ln=BigInt(ln)+1n;
log(ln);
log(10n=='10');
const person={
    name:'Rady',
    age:25,
    profession:{
        engineer:{
            company:'liilab',
            address:'Sylhet'
        },
        student:{
            Institute:{
                name:'RUET',
                department:'CSE',
                Roll:1703059,
                // location: {
                //     division: 'Rajshahi',
                //     district: 'Rajshahi',
                //     thana:'Kazla',
                //     code:6204
                // } 
            }
        }
    }
    
}
log(person.profession?.student?.Institute?.location?.district); //though some code missing in object. error will not be displayed //optional chaining feature
let arr=["red","blue","black","white"];
arr[1]="";
log(arr?.[1]);