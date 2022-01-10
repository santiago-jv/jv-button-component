import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JvButtonComponentModule } from 'jv-button-component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JvButtonComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
