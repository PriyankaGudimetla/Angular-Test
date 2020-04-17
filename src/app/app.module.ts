import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountService } from './account.service';
import { AccountGridComponent } from './account-grid/account-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
