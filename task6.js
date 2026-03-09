//STORING THE PERSON'S NAME, AGE AND STUDENT STATUS HERE:
let name = "Shreeya";
let age = 22;
let student = true;
//let student = false;

//CALCULATING THE AGE OF THE PERSON AFTER 5 YEARS:
let age_after_5 = age + 5;


//CHECKING STUDENT STATUS AND DISPLYING WHETHER HE/SHE IS STUDENT OR NOT:
let student_status;
if (student){
    student_status = "Student";
}
else{
    student_status = "Not Student";
}

//DISPLAYING ALL THE DETAILS HERE:
console.log(
    "Personal Information Summary:\n" +
    `The name of the person is ${name}.\n` +
    `The age of the person is ${age}. \n`+
    `The profession of the person is ${student_status}.\n`+
    `After 5 years, the age will be ${age_after_5}.`
)