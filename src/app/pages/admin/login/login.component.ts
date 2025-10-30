import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
login() {
if(this.loginObj.userName == "admin" && this.loginObj.password == "123456") {
  console.log(this.loginObj);
  this.router.navigate(['/products']);
}else{
  console.log("error");
  console.log(this.loginObj);
  alert("Invalid credentials");
}
}
loginObj:any ={
  userName:'admin',
  password:123456
}

}
