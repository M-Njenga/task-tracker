import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  userCredentials: User[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  userLogin(user: User){
   
    console.log("Credentials:"+this.userCredentials);
    this.loginService.login(user).subscribe( (user) => (this.userCredentials.push(user)));
   

  }

}
