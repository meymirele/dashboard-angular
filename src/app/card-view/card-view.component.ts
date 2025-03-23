import { Component } from '@angular/core';
import { MoreCardsComponent } from "../more-cards/more-cards.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [MoreCardsComponent, CommonModule],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss'
})
export class CardViewComponent {
  
}
