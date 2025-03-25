import { Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'card-view/:name', component: CardViewComponent }
];
