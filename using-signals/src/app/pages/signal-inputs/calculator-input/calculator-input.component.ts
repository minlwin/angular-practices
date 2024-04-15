import { Component, computed, signal } from '@angular/core';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-calculator-input',
  standalone: true,
  imports: [ResultComponent],
  templateUrl: './calculator-input.component.html',
  styles: ``
})
export class CalculatorInputComponent {

  digit1 = signal(0)
  digit2 = signal(0)
  result = computed(() => this.digit1() + this.digit2())

  changeDigit1(value:string) {
    if(value) {
      this.digit1.set(Number(value))
    }
  }

  changeDigit2(value:string) {
    if(value) {
      this.digit2.set(Number(value))
    }
  }

}
