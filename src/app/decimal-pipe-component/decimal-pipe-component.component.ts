import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimal-pipe-component',
template: `
   <div style="text-align:center">
      <h3>Decimal Pipe</h3>
      <p> {{decimalNum1 | number}} </p>
      <p> {{decimalNum2 | number}} </p>
      <div style="text-align:center">
            <p> Apply formatting:- {{decimalNum1 | number:'3.1'}} </p>
            <p> Apply formatting:- {{decimalNum1 | number:'2.1-4'}} </p>
         </div>
   </div>
   `,
     styleUrls: ['./decimal-pipe-component.component.css']
})
export class DecimalPipeComponentComponent implements OnInit {
   decimalNum1: number = 8.7589623;
   decimalNum2: number = 5.43;

  constructor() { }

  ngOnInit() {
  }

}
