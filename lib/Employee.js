// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        if(role == null){
            this.role = "Employee";
        }
    }
    setEmail(){
        e = this.email;
    }
    getRole(){
        
        console.log(this.role);
        let r = this.role;
        return r;
    }
    getName(){
        console.log(this.name);
        let n = this.name;
        return n;
    }
    getId(){
        console.log(this.id);
        let i = this.id;
        return i;
    }
    getEmail(){
        console.log(this.email);
        let e = this.email;
        return e;
    }
}


    module.exports = Employee;




