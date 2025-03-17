import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})

export class LineChartComponent implements OnInit {
  chart: any;
  
  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const canvas = document.getElementById('LineChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    this.chart = new Chart("LineChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                                 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
        
        datasets: [
          {
            label: "Projetos concluidos",
            data: ['542', '542', '536', '327', '17','0.00', '538', '541'],
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            borderColor: 'oklch(0.723 0.219 149.579)',
            backgroundColor: 'oklch(0.723 0.219 149.579)'
          },
          {
            label: "Projetos fora do prazo",
            data: ['100', '542', '300', '327', '17','0.00', '700', '541'],
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            borderColor: 'oklch(0.795 0.184 86.047)',
            backgroundColor: 'oklch(0.795 0.184 86.047)'
          },
          {
            label: "Projetos não concluidos",
            data: ['467','576', '572', '79', '92','574', '573', '576'],
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            borderColor: 'oklch(0.637 0.237 25.331)',
            backgroundColor: 'oklch(0.637 0.237 25.331)'
          }
        ]
      },
      options: {
        aspectRatio:2.5,
        scales: {
          x: {
            ticks: { color: 'white' }
          },
          y: {
            ticks: { color: 'white' }
          }
        },
      }
    });
  }
}
