import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
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
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
