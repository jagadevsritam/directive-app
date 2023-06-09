import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-pipe-component',
   template: `
   <div style="text-align:center">
      <h3>Decimal Pipe</h3>
      <p> {{decimalNum1 | percent:'2.2'}} </p>
   </div>
   `,
  styleUrls: ['./percent-pipe-component.component.css']
})
export class PercentPipeComponentComponent implements OnInit {
   decimalNum1: number = 0.8178;
  constructor() { }

  ngOnInit() {
  }

}
