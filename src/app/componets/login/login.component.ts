import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:boolean = false;
  constructor(private userAuthService: UserAuthService){}
    ngOnInit(): void {
      this.user=this.userAuthService.isUserLogged;
    }
  
    loginFunc(){
      this.userAuthService.userLogin('asd@gmail.com','pass');
      this.user=this.userAuthService.isUserLogged;
    }
    logoutFunc(){
      this.userAuthService.userLogout();
      this.user=this.userAuthService.isUserLogged;
    }
}
