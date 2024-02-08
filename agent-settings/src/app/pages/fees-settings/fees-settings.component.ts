import { Component, OnInit } from '@angular/core';
import { FeesSettingService } from '../../services/fees-setting.service';
import { PaginationComponent } from '../../widgets/pagination/pagination.component';
import { CardComponent } from '../../widgets/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fees-settings',
  standalone: true,
  imports: [PaginationComponent, CardComponent, RouterLink],
  templateUrl: './fees-settings.component.html',
  styles: ``
})
export class FeesSettingsComponent implements OnInit{
  statusList = ['Pending', 'Approved', 'Canceled']
  agenTypes = ['Super Agent (SA)', 'Branch Super Agent (BSA)', 'Channel Sale Executive (CSE)', 'Branch Sale Executive (BSE)', 'Agent (A)', 'Branch Agent (BA)']

  settingList:any[] = []

  constructor(private service:FeesSettingService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe(result => this.settingList = result)
  }
}
