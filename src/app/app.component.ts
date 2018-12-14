import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {


  users: User[];
  cols: any[];
  visibility = this.appService.isVisible();

  constructor(private appService: AppService, private http: HttpClient) {}

  ngOnInit() {

    // this.cols = [
    //   // { field: '_id', header: 'Id', visibility: this.visibility },
    //   // { field: 'index', header: 'Name', visibility: this.visibility },
    //   // { field: 'guid', header: 'Email', visibility: this.visibility },
    //   // { field: 'isActive', header: 'Email', visibility: this.visibility },
    //   // { field: 'balance', header: 'Email', visibility: this.visibility },
    //   // { field: 'picture', header: 'Email', visibility: this.visibility },
    //   // { field: 'age', header: 'Email', visibility: this.visibility },
    //   // { field: 'eyeColor', header: 'Email', visibility: this.visibility },
    //   { field: 'name', header: 'Email', visibility: this.visibility },
    //   { field: 'company', header: 'Email', visibility: this.visibility },
    //   { field: 'email', header: 'Email', visibility: this.visibility },
    //   { field: 'phone', header: 'Email', visibility: this.visibility },
    //   { field: 'address', header: 'Email', visibility: this.visibility },
    //   { field: 'about', header: 'Email', visibility: this.visibility },
    //   // { field: 'registered', header: 'Email', visibility: this.visibility },
    //   // { field: 'latitude', header: 'Email', visibility: this.visibility },
    //   // { field: 'longitude', header: 'Email', visibility: this.visibility },
    //   // { field: 'tags', header: 'Email', visibility: this.visibility },
    //   // { field: 'range', header: 'Email', visibility: this.visibility },
    //   // { field: 'friends', header: 'Email', visibility: this.visibility },
    //   { field: 'greeting', header: 'Email', visibility: this.visibility },
    //   { field: 'favouriteFruit', header: 'Email', visibility: this.visibility },
    //   { field: 'email', header: 'Email', visibility: this.visibility }
    // ];

    this.cols = [
      { field: 'id', header: 'Id', visibility: this.visibility },
      { field: 'name', header: 'Name',  visibility: this.visibility},
      { field: 'email', header: 'Email' , visibility: this.visibility}
    ];

     this.users = [
      { id: '1', name: 'kiran', email: 'kiran@gmail.com' },
      { id: '2', name: 'tom', email: 'tom@gmail.com' },
      { id: '3', name: 'john', email: 'john@gmail.com' },
      { id: '4', name: 'Frank', email: 'frank@gmail.com' },
     ];


  }
}

// this.http.get('/showcase/resources/data/cars-small.json')
//                     .toPromise()
//                     .then(res => <Car[]> res.data)
//                     .then(data => { return data; });



// export interface User {

//   _id;
//   index;
//   guid;
//   isActive;
//   balance;
//   picture;
//   age;
//   eyeColor;
//   name: { first: string; last: string; };
//   company;
//   email;
//   phone;
//   address;
//   about;
//   registered;
//   latitude;
//   longitude;
//   tags: string[];
//   range: number[];
//   friends: Friend[]; /* Coming from the Friend Interface above */
//   greeting: string;
//   favoriteFruit: string;
// }

export interface User {
  id;
  name;
  email;
}

export interface Friend {
  id: number;
  name: string;
}