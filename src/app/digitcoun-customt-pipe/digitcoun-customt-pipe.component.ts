import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitcoun-customt-pipe',
  templateUrl: './digitcoun-customt-pipe.component.html',
  styleUrls: ['./digitcoun-customt-pipe.component.css']
})
export class DigitcounCustomtPipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
transform(val : number) : number {
      return val.toString().length;
   }
}
