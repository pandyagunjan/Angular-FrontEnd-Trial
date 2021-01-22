import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name = '';
  messageFromService :string;
  //Dependecy injection , using ActivateRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    //  console.log(this.service.executeHelloWorldBeanService());
    this.service
      .executeHelloWorldBeanService()
      .subscribe(
        (response) => this.handleSuccessfulResponse(response),
        (error) => this.handleErrorResponse(error));
  }


  getWelcomeMessageWithParameter() {
    //  console.log(this.service.executeHelloWorldBeanService());
    this.service
      .executeHelloWorldBeanServiceWithPathVariable(this.name)
      .subscribe(
        (response) => this.handleSuccessfulResponse(response),
        (error) => this.handleErrorResponse(error));
  }
  handleSuccessfulResponse(response) {
    // console.log(response);
    // console.log(response.message);
    this.messageFromService=response.message
  }


  handleErrorResponse(error) {
   //  console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
   //  console.log(error.error.status);
    this.messageFromService=error.error.message;
  }
}
