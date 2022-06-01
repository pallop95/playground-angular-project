import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ADD_NEW_USER } from "./add-new-user.const";

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  ADD_NEW_USER = ADD_NEW_USER;

  checkbox1: boolean = false;

  checked = false;

  // objectKeys: any = {}
  // Object.keys(ADD_NEW_USER.CONTENT_3.INPUTS);
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor() {
    // this.objectKeys.one = Object.keys(ADD_NEW_USER.CONTENT_3.INPUTS);
  }

  ngOnInit(): void {
  }

  jsonToString() {
    return JSON.stringify(ADD_NEW_USER.CONTENT_6.INPUTS);
  }

  // originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  //   return 0;
  // }
  originalOrder = () => 0

  reverseKeyOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

  valueOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): number => {
    return a.value.localeCompare(b.value);
  }
}
