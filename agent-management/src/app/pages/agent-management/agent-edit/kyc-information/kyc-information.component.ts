import { Component, EventEmitter, Output } from '@angular/core';
import { WidgetsModule } from '../../../../widgets/widgets.module';
import { AgentTypeService } from '../../../../services/agent-type.service';

@Component({
  selector: 'app-kyc-information',
  standalone: true,
  imports: [WidgetsModule],
  templateUrl: './kyc-information.component.html',
  styles: ``
})
export class KycInformationComponent {

  agentTypes:any[] = []
  selectedType = ''

  @Output()
  agentTypeChangeEvent = new EventEmitter

  constructor(service:AgentTypeService) {
    service.findAll().subscribe(result => this.agentTypes = result)
  }

  changeAgentType(type:string) {
    this.agentTypeChangeEvent.emit(type)
    this.selectedType = type
  }

  get showParent() {
    return this.selectedType == 'CSE'
      || this.selectedType == 'BSE'
      || this.selectedType == 'BA'
      || this.selectedType == 'A'
  }
}
