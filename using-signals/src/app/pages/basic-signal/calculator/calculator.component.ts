import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styles: ``
})
export class CalculatorComponent {

  digitOne = signal<number>(0)
  digitTwo = signal<number>(0)
  result = computed(() => this.digitOne() + this.digitTwo())

  changeDigitOne(value:any) {
    this.digitOne.set(Number(value || 0))
  }

  changeDigitTwo(value:any) {
    this.digitTwo.set(Number(value || 0))
  }
}
