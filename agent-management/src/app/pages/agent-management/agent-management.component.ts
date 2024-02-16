import { Component } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-agent-management',
  standalone: true,
  imports: [WidgetsModule, RouterLink, RouterLinkActive],
  templateUrl: './agent-management.component.html',
  styles: ``
})
export class AgentManagementComponent {

}
