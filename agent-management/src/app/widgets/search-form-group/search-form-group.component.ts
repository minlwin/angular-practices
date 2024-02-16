import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-form-group',
  templateUrl: './search-form-group.component.html',
  styles: ``
})
export class SearchFormGroupComponent {

  @Input()
  label = 'Form Label'
}
