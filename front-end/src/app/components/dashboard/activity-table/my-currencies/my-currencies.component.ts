import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyCurrencies } from 'src/app/models/myCurrencies';
import { ConexionService } from 'src/app/services/conexion.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-currencies',
  templateUrl: './my-currencies.component.html',
  styleUrls: ['./my-currencies.component.scss']
})
export class MycurrenciesComponent implements OnInit {

  listOwnCurrencies: MyCurrencies[] = []

  @Output() modalState = new EventEmitter<string>();

  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private _getMyCurrencies: ConexionService
  ) { }

  ngOnInit(): void {
    this.getMyCurrencies();
  }

  setModalOpen(res: string) {
    this.modalState.emit(res);
  }

  getMyCurrencies() {
    this._getMyCurrencies.getMycurrencies().subscribe(data => {
      this.listOwnCurrencies = data;
    }, error => console.log(error))
  }
}
