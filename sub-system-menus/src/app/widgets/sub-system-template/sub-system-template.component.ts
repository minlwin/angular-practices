import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-sub-system-template',
  templateUrl: './sub-system-template.component.html',
  styles: ``
})
export class SubSystemTemplateComponent {

  title = input.required<string>()
  icon = input.required<string>()

  openMenu = signal<boolean>(true)

  toggleMenu() {
    this.openMenu.update(state => !state)
  }
}
