import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsideComponent } from "./aside/aside.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, NavbarComponent, DashboardComponent, AsideComponent] // Importando componentes standalone aqui
  // Importando componentes standalone aqui
})
export class AppComponent {
}
