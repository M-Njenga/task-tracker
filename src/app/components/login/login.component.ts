import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any={
    userName:'',
    password:''
  }


  onLogin(){
    if(this.loginObj.userName== "admin" && this.loginObj.password=="334455"){
      
console.log(this.loginObj);
    }else{
      alert('Wrong Credentials')
    }
  }
}
