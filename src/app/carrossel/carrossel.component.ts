import { Component } from '@angular/core';
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { LineChartComponent } from "../line-chart/line-chart.component";

@Component({
  selector: 'app-carrossel',
  imports: [BarChartComponent, LineChartComponent],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent {

}
