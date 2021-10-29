import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { GroceriesInputComponent } from './groceries-input/groceries-input.component';
import { FormsModule } from '@angular/forms';
import { GroceriesService } from './groceries.service';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    NavbarComponent,
    ListComponent,
    GroceriesInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GroceriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
