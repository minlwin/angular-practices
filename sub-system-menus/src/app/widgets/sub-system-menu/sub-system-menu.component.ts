import { Component, input } from '@angular/core';
import { MenuModel } from '../sub-menu/menu-model';

@Component({
  selector: 'app-sub-system-menu',
  templateUrl: './sub-system-menu.component.html',
  styles: ``
})
export class SubSystemMenuComponent {

    menus = input.required<readonly MenuModel []>()
}
