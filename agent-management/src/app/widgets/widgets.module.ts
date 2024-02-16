import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CardComponent } from './card/card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchFormGroupComponent } from './search-form-group/search-form-group.component';



@NgModule({
  declarations: [
    PageComponent,
    ListViewComponent,
    CardComponent,
    PaginationComponent,
    SearchFormGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent,
    ListViewComponent,
    CardComponent,
    SearchFormGroupComponent
  ]
})
export class WidgetsModule { }
