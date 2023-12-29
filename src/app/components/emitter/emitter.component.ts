import { Component } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-emitter',
  standalone: true,
  imports: [ChangeNumberComponent],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css',
})
export class EmitterComponent {
  number: number = 0;

  onChangeNumber() {
    this.number = this.number + 1;
  }
}
