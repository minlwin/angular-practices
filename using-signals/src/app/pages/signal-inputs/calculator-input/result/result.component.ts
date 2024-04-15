import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styles: ``
})
export class ResultComponent {

  result = input.required<number>()
}
