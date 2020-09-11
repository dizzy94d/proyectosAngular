import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import {User} from '../model/user.model';

@Component({
  selector: 'app-father-app',
  templateUrl: './father-app.component.html'
})
export class FatherAppComponent implements OnInit {

  sonList = [];

  constructor() {
    this.sonList.push(new User('Juan','Fernandez','20043536'));
    this.sonList.push(new User('Luis','Gonzalez','20043536'));
    this.sonList.push(new User('Carmen','Heredia','20043536'));
    this.sonList.push(new User('Laura','Duarte','20043536'));
   }

  ngOnInit(): void {
  }

}
