`use strict`;
let allEmployees=[];
let form =document.getElementById("form");
let card=document.getElementById("card");
var r;
var id;
var salary;
function EmployeeInformation (fullName,department,level,img){
    // this.EmployeeId=EmployeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.salary=0;
    this.image=img;
    this.id=0;
    allEmployees.push(this)
}

let employee1= new EmployeeInformation("Ghazi Samer","Administration","Senior","./js/assets/Ghazi.jpg",)
let employee2= new EmployeeInformation("Lana Ali","Finance","Senior","js/assets/Lana.jpg")
let employee3= new EmployeeInformation("Tamara Ayoub","Marketing","Senior","js/assets/Tamara.jpg")
let employee4= new EmployeeInformation("Safi Walid","Administration","Mid-Senior","js/assets/Safi.jpg")
let employee5= new EmployeeInformation("Omar Zaid","Development","Senior","js/assets/Omar.jpg")
let employee6= new EmployeeInformation("Rana Saleh","Development","Junior","js/assets/Rana.jpg")
let employee7= new EmployeeInformation("Hadi Ahmad","Finance","Mid-Senior","js/assets/Hadi.jpg")


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
  var num = 1;
    EmployeeInformation.prototype.employeeId=function(){
        
        var string = "" + num;
    var pad = "0000";
    id = pad.substring(0, pad.length - string.length) + string;
    num++;
    console.log(id);
    return id;
            
    }

    EmployeeInformation.prototype.render=function(){
        let newDiv=document.createElement("div");
        newDiv.style.backgroundColor="#FFAB76";
        newDiv.style.color="black";
        newDiv.style.width="250px";
        newDiv.style.padding="20px";
        newDiv.style.margin="20px";
        newDiv.style.fontSize="15px";

        let image =document.createElement("img");
        image.setAttribute("src",this.image);
        newDiv.appendChild(image).width="200";
        card.appendChild(newDiv);

        let info=document.createElement("p");
        info.textContent="name : " + this.fullName + " - "+"id : "+id+" - " +"Level :"+this.level+
        " - "+"department :" + this.department+" - " +"salary : "+salary  ;
        newDiv.appendChild(info);
    }
    for(i=0;i<allEmployees.length;i++){
        allEmployees[i].employeeId();
        allEmployees[i].randomSalary();
        allEmployees[i].render();
        allEmployees[i].employeeId();
    }
    
    form.addEventListener ("submit", handleSubmit)
    function handleSubmit(event){
        event.preventDefault();
        let fullname =event.target.fullname.value;
        console.log(fullname);
        let Department=event.target.Department.value;
        console.log(Department);
        let Level=event.target.Level.value;
        console.log(Level);
        let imageURL=event.target.imageURL.value;
        console.log(imageURL);
        let newEmployee=new EmployeeInformation(fullname,Department,Level,imageURL);
        newEmployee.employeeId();
        newEmployee.randomSalary();
        newEmployee.render();
    }