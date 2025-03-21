import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { BarChartComponent } from "../bar-chart/bar-chart.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CardComponent,BarChartComponent],
})
export class DashboardComponent {

}
