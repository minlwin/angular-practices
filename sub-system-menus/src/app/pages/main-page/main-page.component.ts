import { Component, computed, signal } from '@angular/core';
import { SubSystem } from './sub-system';
import { SubSystemService } from '../../services/sub-system.service';
import { WidgetsModule } from '../../widgets/widgets.module';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [WidgetsModule],
  templateUrl: './main-page.component.html',
  styles: ``
})
export class MainPageComponent {

  subSystems = signal<readonly SubSystem[]>([])
  selectedIndex = signal(0)
  selectedSystem = computed(() => this.subSystems()[this.selectedIndex()])

  constructor(systemService:SubSystemService) {
    systemService.findAll().subscribe(result => this.subSystems.set(result))
  }

  changeSubSystem(index:number) {
    this.selectedIndex.set(index)
  }
}
