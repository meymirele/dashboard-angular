import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CardComponent, BarChartComponent, ButtonComponent],
})
export class DashboardComponent {
refreshCards() {
throw new Error('Method not implemented.');
}
cards: any;

}
