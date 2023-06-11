import { Component } from '@angular/core';
import {  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators, } from '@angular/forms';
  
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-reactive',
  templateUrl: './user-reactive.component.html',
  styleUrls: ['./user-reactive.component.scss']
})
export class UserReactiveComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserService,private route:Router) {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: this.fb.array([
        this.fb.control('', [Validators.required, Validators.pattern('[0-9]{10}')])
      ]),
      
      address: this.fb.group({
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        street: ['', Validators.required]
      }),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

 
  get fullName() {
    return this.userForm.get('fullName');
  }
  
  
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
 
  get address(): FormArray {
    return this.userForm.get('address') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      city: '',
      postalcode:'',
      street: '',
    });
  }
  get mobileNumber() {
    return this.userForm.get('mobileNumber') as FormArray;
  }
  newMobile(): FormGroup {
    return this.fb.group({
      mobile:''
    });
  }

  addMobileNumber() {
    this.mobileNumber.push(this.fb.control('', [Validators.required, Validators.pattern('[0-9]{10}')]));
  }

  removeMobileNumber(index:number) {
    this.mobileNumber.removeAt(index);
  }
  addUser(){
    console.log(this.userForm.value)
    this.userService. signUpUser(this.userForm.value).subscribe(data=> alert('user added!'))
    this.route.navigate(['/product'])
  }
}



