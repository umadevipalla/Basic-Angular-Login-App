import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private user: UserService,
  private router:Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    console.log(event);
    var username = event.target.elements[0].value;
    var password = event.target.elements[1].value;

    if(username == 'admin' && password == 'admin') {
      this.user.setUserLoggedIn();
  		this.router.navigate(['dashboard']);
  	}

  }

}
