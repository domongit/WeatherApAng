import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempvariablesComponent } from './details/tempvariables/tempvariables.component';
import {MainareaComponent } from './mainarea/mainarea.component';
import { SearchComponent } from './search/search.component'
 import {HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent ,
    TempvariablesComponent,
    MainareaComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
