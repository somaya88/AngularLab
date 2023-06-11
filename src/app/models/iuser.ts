export interface Iuser {
    id:number;
    fullName:string;
    email:string;
    address:string;
    mobileNumber?:[{mobileNumber:string}]
    password:string;
    confirmPassword:string;
}
