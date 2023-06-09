import { Component, OnInit } from '@angular/core';
@Component({
   selector: 'app-test1',
   template: `
   <div>
   <ng-template ngFor let-item [ngForOf]="Fruits" let-i="index">
   <p>{{i}}</p>
   </ng-template>
   </div>`
   ,
   styleUrls: ['./test1.component.css']
})

export class Test1Component implements OnInit {
   Fruits = ["mango","apple","orange","grapes"];
   ngOnInit()
   {
   }
}
