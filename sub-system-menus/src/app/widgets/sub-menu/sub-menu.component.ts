import { Component, input } from '@angular/core';
import { MenuModel } from './menu-model';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styles: ``
})
export class SubMenuComponent {
  menu = input.required<MenuModel>()

}
