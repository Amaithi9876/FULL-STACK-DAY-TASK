class person{
    constructor(name,fathername,native,dob,salary,mothername,job,bloodgroup){
        this.name=name;
        this.fathername=fathername;
        this.native=native;
        this.dob=dob;
        this.salary=salary;
        this.mothername=mothername;
        this.job=job;
        this.bloodgroup=bloodgroup;
    }
}
var p1=new person("dinesh","balaguru","cuddalore","07/11/2000",25.0,"uma","accountant","a+");

console.log(p1);
console.log(p1.name+" "+p1.fathername+" "+p1.native+" "+p1.dob+" "+p1.salary+" "+p1.mothername+" "+p1.job+" "+p1.bloodgroup);