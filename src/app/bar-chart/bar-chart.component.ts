import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Chart, { ChartConfiguration, Plugin, Chart as ChartJS } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AfterViewInit {
  chart: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
    }
  }

  createChart() {
    const canvas = document.getElementById('BarChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Elemento <canvas> não encontrado!');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Plugin para desenhar fundo OKLCH
    const backgroundPlugin: Plugin = {
      id: 'customCanvasBackgroundColor',
      beforeDraw: (chart: ChartJS) => {
        const { ctx } = chart;
        ctx.save();
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };

    // Configuração do gráfico
    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                 '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
        datasets: [
          {
            label: "Projetos concluídos",
            data: [300, 400, 350, 500, 450, 380, 370, 390],
            backgroundColor: 'oklch(0.723 0.219 149.579)', // verde
            barThickness: 25
          },
          {
            label: "Projetos fora do prazo",
            data: [467, 576, 572, 79, 92, 574, 573, 576],
            backgroundColor: 'oklch(0.795 0.184 86.047)', // amarelo
            barThickness: 25
          },
          {
            label: "Projetos não concluídos",
            data: [542, 542, 536, 327, 17, 0, 538, 541],
            backgroundColor: 'oklch(0.637 0.237 25.331)', // vermelho
            barThickness: 25
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: { color: 'gray' }
          },
          y: {
            ticks: { color: 'gray' }
          }
        }
      },
      plugins: [backgroundPlugin]
    };

    this.chart = new Chart(ctx, config);
  }
}
