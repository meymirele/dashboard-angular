import { Component, OnInit } from '@angular/core';
import { MoreCardsComponent } from "../more-cards/more-cards.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [MoreCardsComponent, CommonModule],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss'
})
export class CardViewComponent implements OnInit {
  name?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
  } //passar como propriedade
}