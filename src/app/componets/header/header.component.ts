import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  userLog: boolean;
  constructor(private userauthService: UserAuthService) {
    this.userLog = this.userauthService.isUserLogged;
  }
  ngOnInit(): void {
    // this.userLog=this.userauthService.isUserLogged;

    // console.log(this.userLog);
    this.userauthService.getUserStatus().subscribe(data => {
      this.userLog = data;
      console.log(this.userLog);
    });
  }
}
