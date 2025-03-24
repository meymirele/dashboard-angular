import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() refresh = new EventEmitter<void>(); // Evento de refresh

  emitRefresh() {
    this.refresh.emit(); // Dispara o evento quando o botão é clicado
  }
}
