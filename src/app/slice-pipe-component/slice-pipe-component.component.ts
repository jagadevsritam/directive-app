import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice-pipe-component',
template: `
   <div>
      <h3>Start index:- {{Fruits | slice:2}}</h3>
      <h4>Start and end index:- {{Fruits | slice:1:4}}</h4>
      <h5>Negative index:- {{Fruits | slice:-2}}</h5>
      <h6>Negative start and end index:- {{Fruits | slice:-4:-2}}</h6>
   </div>
   `,
     styleUrls: ['./slice-pipe-component.component.css']
})
export class SlicePipeComponentComponent implements OnInit {
   Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  constructor() { }

  ngOnInit() {
  }

}
