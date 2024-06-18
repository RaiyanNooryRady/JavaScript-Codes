let student = {
    name: "rady",
    age: 25,
    degree: "bsc",
    home: {
        district: "sylhet",
        village: "Anantapur",
        country: "bangladesh",
    },
    job: {
        designation: "engineer",
        company: "rady softwares",
        salary: {
            monthly: 40000,
            yearly: 1500000,
        },
    },
};
console.log(student.home);
console.log(student.job.salary.monthly);
console.log(student.home["village"]);
console.log(student["job"]["salary"]["yearly"]);
console.log("using loop: ")
for (let value in student) {
    if (typeof student[value] != "object")
        console.log("student "+value + " is " + student[value]);
    else {
        for(let nestVal in student[value]){
            if (typeof student[value][nestVal] != "object")
            console.log("student "+value+" "+nestVal+" is "+student[value][nestVal]);
            else{
                for(let doubleNest in student[value][nestVal]){
                    console.log("student "+value+" "+nestVal+" "+doubleNest+" is "+student[value][nestVal][doubleNest]);
                }
            }
        }
    }

}
