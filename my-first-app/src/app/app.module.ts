import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './waring-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ServerComponent, WarningAlertComponent]
})
export class AppModule { }
