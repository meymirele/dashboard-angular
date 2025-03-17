import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarrosselComponent } from "./carrossel/carrossel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, DashboardComponent] // Importando componentes standalone aqui
 // Importando componentes standalone aqui

})
export class AppComponent {
  title = 'dashboard';
}