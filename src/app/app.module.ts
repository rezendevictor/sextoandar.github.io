import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApartamentComponent } from './components/apartament.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './components/houses/houses.component';
import { ApartamentServices } from './services/apartament.services';
import { BackgroundComponent } from './components/background/background.component';
import { ImovelComponent } from './components/imovel/imovel.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RegistrarComponent } from './components/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    BackgroundComponent,
    ImovelComponent,
    GridListComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    ],
  providers: [
    ApartamentServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
