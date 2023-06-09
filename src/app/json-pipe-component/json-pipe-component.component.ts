import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-pipe-component',
   template: `
   <div style="text-align:center">
      <p ngNonBindable>{{ jsonData }}</p> (1)
      <p>{{ jsonData }}</p>
      <p ngNonBindable>{{ jsonData | json }}</p>
      <p>{{ jsonData | json }}</p>
   </div>
   `,
  styleUrls: ['./json-pipe-component.component.css']
})
export class JsonPipeComponentComponent implements OnInit {
   jsonData = { id: 'one', name: { username: 'user1' }}
  constructor() { }

  ngOnInit() {
  }

}
