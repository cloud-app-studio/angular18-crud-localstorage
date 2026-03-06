export class EmployeeModel {
    empId: number;
    name: string;
    city: string;
    state: string;
    emailId: string;
    phoneNumber: string;
    address: string;
    pincode: string;

    constructor(){
        this.empId=0;
        this.name="";
        this.city="";
        this.state="";
        this.emailId="";
        this.phoneNumber="";
        this.address="";
        this.pincode="";
    }
}