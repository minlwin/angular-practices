import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { SubSystemMenuComponent } from './sub-system-menu/sub-system-menu.component';
import { SubSystemTemplateComponent } from './sub-system-template/sub-system-template.component';

@NgModule({
  declarations: [
    SubMenuComponent,
    SubSystemMenuComponent,
    SubSystemTemplateComponent
  ],
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  exports: [
    SubMenuComponent,
    SubSystemMenuComponent,
    SubSystemTemplateComponent
  ]
})
export class WidgetsModule {}
