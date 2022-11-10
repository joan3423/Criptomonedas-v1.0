import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.scss']
})
export class ActivityTableComponent implements OnInit {

  router: string;
  @Output() modalState = new EventEmitter<string>();

  constructor(
    private _router: Router
  ) { 
    this.router = _router.url; 
  }

  setOpenModal(res: string) {
    this.modalState.emit(res);
  }

  ngOnInit(): void {
    console.log(this.modalState)
  }

}
