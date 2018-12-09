import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {


  users: User[];

/*   roleCheck: boolean = false; */

  cols: any[];
  ngOnInit() {
    
    this.cols = [
      { field: 'id', header: 'Id', visibility: false},
      { field: 'name', header: 'Name', visibility: true},
      { field: 'email', header: 'Email', visibility: true}
    ];

    this.users = [
      { id: '1', name: 'kiran', email: 'kiran@gmail.com' },
      { id: '2', name: 'tom', email: 'tom@gmail.com' },
      { id: '3', name: 'john', email: 'john@gmail.com' },
      { id: '4', name: 'Frank', email: 'frank@gmail.com' },

    ];
    
  }
}


export interface User {
  id;
  name;
  email;
}


