import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
/*Importante este import*/
import {Input} from '@angular/core';

@Component({
  selector: 'app-son-app',
  templateUrl: './son-app.component.html'
 
})
export class SonAppComponent implements OnInit {

  @Input() myUser: User;
  constructor() { }

  ngOnInit(): void {
  }

}
