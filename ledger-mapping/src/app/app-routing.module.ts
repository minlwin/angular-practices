import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MappingListComponent } from './mapping-list/mapping-list.component';
import { MappingEditComponent } from './mapping-edit/mapping-edit.component';

const routes: Routes = [
  {path: "list", component: MappingListComponent},
  {path: "edit", component: MappingEditComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
