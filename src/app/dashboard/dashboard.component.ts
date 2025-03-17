import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CarrosselComponent } from "../carrossel/carrossel.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CardComponent, CarrosselComponent],
})
export class DashboardComponent {

}
