import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
})
export class DashboardComponent {
  cards = [
    { title: 'Card 1', text: 'Informações sobre o card 1' },
    { title: 'Card 2', text: 'Informações sobre o card 2' },
    { title: 'Card 3', text: 'Informações sobre o card 3' },
    { title: 'Card 4', text: 'Informações sobre o card 4' },
    { title: 'Card 5', text: 'Informações sobre o card 5' },
    { title: 'Card 6', text: 'Informações sobre o card 6' },
    { title: 'Card 7', text: 'Informações sobre o card 7' },
    { title: 'Card 8', text: 'Informações sobre o card 8' }
  ];
}
