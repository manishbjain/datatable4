import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User, Friend} from './app.component'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  isVisible() {

  const currentUser = "manish";
    if 
      (currentUser === "manish")
      return(true);
    else
     return(false);

  }

 


}

