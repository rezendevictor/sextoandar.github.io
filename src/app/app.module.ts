import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { HomeComponent } from './components/home/home.component';
import { HousesComponent } from './components/houses/houses.component';
import { ImovelComponent } from './components/imovel/imovel.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VisitComponent } from './components/visit/visit.component';
import { AppRoutes } from './routes';
import { ApartamentServices } from './services/apartament.services';
@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    BackgroundComponent,
    ImovelComponent,
    GridListComponent,
    RegistrarComponent,
    HomeComponent,
    VisitComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [ApartamentServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
