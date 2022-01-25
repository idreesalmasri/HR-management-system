`use strict`;
// let min;
// let max;
var r;
function EmployeeInformation (EmployeeId,fullName,department,level,){
    this.EmployeeId=EmployeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    
}

let employee1= new EmployeeInformation(1000,"Ghazi Samer","Administration","Senior")
let employee2= new EmployeeInformation(1001,"Lana Ali","Finance","Senior")
let employee3= new EmployeeInformation(1002,"Tamara Ayoub","Marketing","Senior")
let employee4= new EmployeeInformation(1003,"Safi Walid","Administration","Mid-Senior")
let employee5= new EmployeeInformation(1004,"Omar Zaid","Development","Senior")
let employee6= new EmployeeInformation(1005,"Rana Saleh","Development","Junior")
let employee7= new EmployeeInformation(1006,"Hadi Ahmad","Finance","Mid-Senior")


EmployeeInformation.prototype.randomSalary=function getRndInteger(min, max) {
    if (this.level=="Senior"){
        var min =1500;
        var max=2000;
        console.log(min,max);
    }
    else if(this.level=="Mid-Senior"){
        var min =1000;
        var max=1500;
        console.log(min,max);
    }
    else if(this.level=="Junior"){
        var min=500;
        var max=1000;
        console.log(min,max);
    }
        var r= Math.floor(Math.random() * (max - min + 1) ) + min;
        console.log(r);
        return salary=r-r*0.075;
  }
    
    EmployeeInformation.prototype.render=function(){
        document.write(`<main> ${this.fullName}</main>`)
        document.write(salary);
    }
    employee1.randomSalary(); 
    employee1.render();
    employee2.randomSalary(); 
    employee2.render();
    employee3.randomSalary(); 
    employee3.render();
    employee4.randomSalary(); 
    employee4.render();
    employee5.randomSalary(); 
    employee5.render();
    employee6.randomSalary(); 
    employee6.render();
    employee7.randomSalary(); 
    employee7.render();
    