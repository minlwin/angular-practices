import { Component } from '@angular/core';
import { WidgetsModule } from '../../../widgets/widgets.module';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agent-edit',
  standalone: true,
  imports: [WidgetsModule, RouterLink],
  templateUrl: './agent-edit.component.html',
  styles: ``
})
export class AgentEditComponent {

  title = "Create Agent"

  constructor(route:ActivatedRoute) {
    route.queryParamMap.subscribe(map => {
      if(map.get("id")) {
        this.title = "Update Agent"
      }
    })
  }
}
