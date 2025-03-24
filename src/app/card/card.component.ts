import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink], // Importa RouterModule para permitir navegação
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
refreshCards() {
throw new Error('Method not implemented.');
}
  @Input() id!: number;
  @Input() name!: string;
  @Input() cargo!: string;
  @Input() projects!: number;
  @Input() meta!: number;
  @Input() color!: string;

  constructor(private router: Router) {}

}
