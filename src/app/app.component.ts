import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginResponse = 'empty';
  logoutResponse = 'empty';
  resourceResponse = 'empty';

  constructor(private http: HttpClient) { }

  public login() {

    let basic = ' Basic ' + btoa('ironman:iron');
    console.log(basic);

    let head: HttpHeaders = new HttpHeaders({ Authorization: basic });

    this.http.get("/springexample/private/admin", { headers: head }).subscribe(
      (data) => {
        this.loginResponse = JSON.stringify(data);
        console.log(JSON.stringify(data));
      },
      (error) => {
        this.loginResponse = JSON.stringify(error);
        console.log(error.error);
      }
    );
  }
  public privateResource() {
    this.http.get("/springexample/private/admin/res").subscribe(
      (data) => {
        this.resourceResponse = JSON.stringify(data);
        console.log(JSON.stringify(data));
      },
      (error) => {
        this.resourceResponse = JSON.stringify(error);
        console.log(error.error);
      }
    );
  }
  public logout() {
    this.http.get("/springexample/logout").subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.logoutResponse = JSON.stringify(data);
      },
      (error) => {
        console.log(error.error);
        this.logoutResponse = JSON.stringify(error);
      }
    );
  }
}