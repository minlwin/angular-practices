import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { PaginationComponent } from '../../widgets/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../widgets/card/card.component';

@Component({
  selector: 'app-limit-settings',
  standalone: true,
  imports: [
    PaginationComponent, CardComponent, RouterLink
  ],
  templateUrl: './limit-settings.component.html',
  styles: ``
})
export class LimitSettingsComponent implements OnInit{

  statusList = ['Pending', 'Approved', 'Canceled']
  agenTypes = ['Super Agent (SA)', 'Branch Super Agent (BSA)', 'Channel Sale Executive (CSE)', 'Branch Sale Executive (BSE)', 'Agent (A)', 'Branch Agent (BA)']

  settingList:any[] = []

  constructor(private service:SettingsService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(list => this.settingList = list)
  }

}
