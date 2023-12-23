//1. For the given JSON iterate over all for loops(for, forin, forof,foreach) 

var student_details={
    Name:"Ramya",
    Course:"Full stack developer",
    Batch:"Weekend",
    Language:["JavaScript","CSS","HTML"]
}

//For loop
for (let stu in student_details){
    if(student_details.Course=="Data Science")
    console.log("This name is wrongly insterted in this object")
    else{
        console.log("Looping (FOR)");
        console.log(student_details);
    }
}

//for in
for (let stu1 in student_details){
console.log("Looping (ForIn)");
console.log(student_details);
} 

//for of
for(let stu2 of student_details.Language){
    console.log("Looping (ForOf)");
    console.log(stu2);
}

//ForEach
student_details.Language.forEach(stu3=> {
    console.log("Looping (ForEach)");
    console.log(stu3);
});

//2.Create your own resume data in JSON format
var resume={
    Name:"Ramya R P",
    Position:"Business Data Analyst",
    contact:{
        phone:"1234567890",
        email:"ramyapremakumari2000@gmail.com",
        Address:"Flat xyz,sample colony,tamil nadu"
    },
    Education:[
        tenth={
            School:"Kendriya Vidyalaya",
            Grade:"8.5 CGPA",
        },
        twelth={
            school:"GK Shetty Vivekandha Vidyalaya",
            Grade:"95.6 Percentage"
        },
        undergraduate={
            Institution:"DG vaishnav",
            grade:"80 percentage",
        },
        postgraduate={
            Institution:"Loyola",
            grade:"80 percentage"
        }
    ],
    experience:[
        {
            Postion:"Business data analyst",
            Company:"MSC Technology",
            Years_worked:"3years"
        }
    ],
    skills:["Power BI","Informatica","SQL","Microsoft office"],
    language:["English","Hindi","Tamil"],
    Interest:["creative designing","Cooking","Drawing","Fashion designing"]
}
  
  console.log(resume);

  