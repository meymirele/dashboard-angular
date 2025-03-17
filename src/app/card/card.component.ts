import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() name:string = ''
  @Input() cargo:string = '' 
  @Input() projects:number = 0
  @Input() meta:number = 0 
}
