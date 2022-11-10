import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  faClose = faClose;

  @Input() modalState = <string>("closed")
  @Output() closeModal = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {

  }

  setModalClose(res: string) {
    this.closeModal.emit(res);
  }


}
