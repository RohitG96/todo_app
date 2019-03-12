import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './componenets/todos/todos.component';
import { TodoitemComponent } from './componenets/todoitem/todoitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { TodolistServicesService } from "./todolist-services.service";
import en from '@angular/common/locales/en';
registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** import ng-zorro-antd root module，you should import NgZorroAntdModule and avoid importing sub modules directly **/
    NgZorroAntdModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ],
  /** config ng-zorro-antd i18n (language && date) **/
  providers   : [
    { provide: NZ_I18N, useValue: en_US }, TodolistServicesService
  ]
})
export class AppModule { }
