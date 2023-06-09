import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CustomstyleDirective } from './customstyle.directive';
import { Test1Component } from './test1/test1.component';
import { ChildComponent } from './child/child.component';
import { CurrencyPipeComponentComponent } from './currency-pipe-component/currency-pipe-component.component';
import { SlicePipeComponentComponent } from './slice-pipe-component/slice-pipe-component.component';
import { DecimalPipeComponentComponent } from './decimal-pipe-component/decimal-pipe-component.component';
import { PercentPipeComponentComponent } from './percent-pipe-component/percent-pipe-component.component';
import { JsonPipeComponentComponent } from './json-pipe-component/json-pipe-component.component';
import { DigitcounCustomtPipeComponent } from './digitcoun-customt-pipe/digitcoun-customt-pipe.component';
import { DigitcountPipePipe } from './digitcount-pipe.pipe';
import { DigitcounCustomtComponentComponent } from './digitcoun-customt-component/digitcoun-customt-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CustomstyleDirective,
    Test1Component,
    ChildComponent,
    CurrencyPipeComponentComponent,
    SlicePipeComponentComponent,
    DecimalPipeComponentComponent,
    PercentPipeComponentComponent,
    JsonPipeComponentComponent,
    DigitcounCustomtPipeComponent,
    DigitcountPipePipe,
    DigitcounCustomtComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
