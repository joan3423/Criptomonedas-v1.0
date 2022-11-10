import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  modalState = <string>("closed")

  setModalState(value: string) {
    this.modalState = value;
    console.log(this.modalState)
  }

  ngOnInit(): void {
  }
}
