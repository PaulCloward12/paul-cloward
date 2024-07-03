import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Input('size')
  size = 'S'; // S,M,L

  @Input('bg')
  bg = 'B'; // BLACK, GREEN, BLUE, DARKBLUE

  @Input('name')
  name=''; 

  @Input('shadow')
  shadow = true;

  @Input('disabled')
  disabled = false;
}
