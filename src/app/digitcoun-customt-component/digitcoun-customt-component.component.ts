import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitcoun-customt-component',
   template: `
   <div>
      <p> DigitCount Pipe </p>
      <h1>{{ digits | digitcount }}</h1>
   </div>
   `,
  styleUrls: ['./digitcoun-customt-component.component.css']
})
export class DigitcounCustomtComponentComponent implements OnInit {
   digits : number = 100;
  constructor() { }

  ngOnInit() {
  }

}
