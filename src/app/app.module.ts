import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApartamentComponent } from './components/apartament.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './components/houses/houses.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartamentComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
