let name= prompt("Enter your name:")
let age= Number(prompt("Enter your age:"))
let marks= Number(prompt("Enter your marks:"))
let grade;
if (marks>= 85 && marks<=100){
  grade= "A"
}else if (marks>= 70 && marks<85){
  grade= "B"
}else if (marks>= 50 && marks<70){
  grade= "C"
}else if (marks>=0 && marks<50){
  grade= "D"
}
alert("Name: "+name + "\nAge: "+age + "\nMarks: "+marks + "\nGrade: "+grade)
