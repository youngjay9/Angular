import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Server2Component } from './server2/server2.component';
import { AppFontComponent } from './app-font/app-font.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 定義 AppModule 內擁有的 component 清單
  declarations: [
    AppComponent,
    ServerComponent,
    Server2Component,
    AppFontComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
