import { Component } from '@angular/core';
import { CardComponent } from '../../../widgets/card/card.component';
import { FeesListComponent } from '../../../widgets/fees-list/fees-list.component';
import { FeesAddComponent } from '../../../widgets/fees-add/fees-add.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fees-edit',
  standalone: true,
  imports: [CardComponent, FeesListComponent, FeesAddComponent, RouterLink],
  templateUrl: './fees-edit.component.html',
  styles: ``
})
export class FeesEditComponent {

}
