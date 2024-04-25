const lang = [
    { language: 'bangla', type: "normal" },
    { language: 'javascript', type: "scripting" },
    { language: 'java', type: "normal" },
    { language: 'python', type: 'scripting' }
];
console.log('languages: ', lang);

let scriptingLang = {};

// lang.forEach((x) => {
//     const type=x.type;
//     if (!scriptingLang[type])
//         scriptingLang[type] = [];
    
//         scriptingLang[type].push(x);
// });
//way2
// scriptingLang = lang.reduce((res,x)=>{
//     const type=x.type;
//     if(!res[type])
//     res[type]=[];
//     res[type].push(x);
//     return res;
// },{});
//way3
scriptingLang=Object.groupBy(lang,(x)=>x.type);
console.log(scriptingLang);