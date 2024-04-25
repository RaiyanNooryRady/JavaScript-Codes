let lang;
lang=NaN;
console.log(lang??'javascript');//returns right side value if left side value is null or undefined
console.log(lang||'javascript');//returns right side value if left side value is falsy
