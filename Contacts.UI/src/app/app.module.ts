import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageContactComponent } from './components/manage-contact/manage-contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule,  ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ManageContactComponent,
    AddContactComponent,
    EditContactComponent,
    LoaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
