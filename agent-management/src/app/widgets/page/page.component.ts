import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: ``
})
export class PageComponent {

  @Input()
  icon = 'bi-house'
  @Input()
  title = 'Agent Management'
}
