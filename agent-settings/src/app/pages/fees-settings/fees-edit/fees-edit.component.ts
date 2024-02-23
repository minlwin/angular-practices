import { Component } from '@angular/core';
import { CardComponent } from '../../../widgets/card/card.component';
import { FeesListComponent } from '../../../widgets/fees-list/fees-list.component';
import { FeesAddComponent } from '../../../widgets/fees-add/fees-add.component';
import { RouterLink } from '@angular/router';
import { AgentListComponent } from '../../../widgets/agent-list/agent-list.component';
import { AgentAddComponent } from '../../../widgets/agent-add/agent-add.component';

@Component({
  selector: 'app-fees-edit',
  standalone: true,
  imports: [CardComponent, FeesListComponent, FeesAddComponent,  AgentListComponent, AgentAddComponent, RouterLink],
  templateUrl: './fees-edit.component.html',
  styles: ``
})
export class FeesEditComponent {

}
