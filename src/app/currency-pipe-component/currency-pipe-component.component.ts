import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe-component',
template: `
   <div style="text-align:center">
      <h3> Currency Pipe</h3>
      <p>{{ price | currency:'EUR':true}}</p>
      <p>{{ price | currency:'INR' }}</p>
   </div>
   `,
     styleUrls: ['./currency-pipe-component.component.css']
})
export class CurrencyPipeComponentComponent implements OnInit {
price : number = 20000;
  constructor() { }

  ngOnInit() {
  }

}
