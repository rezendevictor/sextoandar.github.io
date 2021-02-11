import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApartamentComponent } from './components/apartament.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './components/houses/houses.component';
import { ApartamentServices } from './services/apartament.services';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartamentComponent,
    HousesComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApartamentServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
