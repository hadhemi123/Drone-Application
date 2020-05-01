import { Component, OnInit, Directive } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Directive({
  selector: '[register][ngModel]',
  providers: [NgModel]
})

export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
