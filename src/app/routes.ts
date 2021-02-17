import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VisitComponent } from './components/visit/visit.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'novoRegistro', component: RegistrarComponent },
  { path: 'marcarVisita', component: VisitComponent },
];
