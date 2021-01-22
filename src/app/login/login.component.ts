import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='gunjan'
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin=false
  //router , in past Angular.giveMERouter , but now below method
  //Dependency Injection for Router , add private router variable  
  constructor(private router: Router,private hardCodedAuthenticationservice :HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin()
  {
    //console.log(this.username)
    //if(this.username === "gunjan" && this.password === 'dummy')
    if(this.hardCodedAuthenticationservice.authenticate(this.username,this.password))
       {
         //When password and username is correct , route to welcome page
         this.router.navigate(['welcome',this.username])
         this.invalidLogin=false;
       }
       else
       {
         this.invalidLogin=true
       }
   
  }
}
