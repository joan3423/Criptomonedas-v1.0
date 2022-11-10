import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { availablesCurrenciesList } from 'src/app/models/availablesCurrencies';
import { ConexionService } from 'src/app/services/conexion.service';
import { DashboardComponent } from '../../dashboard.component';
import decode from 'jwt-decode';

@Component({
  selector: 'app-list-currencies-table',
  templateUrl: './list-currencies-table.component.html',
  styleUrls: ['./list-currencies-table.component.scss']
})
export class ListcurrenciesTableComponent implements OnInit {

  availablesCurrenciesTableData: availablesCurrenciesList[] = [];

  @Output() modalState = new EventEmitter<string>();

  verifyAccess = <any | string>({role: "denegado"})

  constructor(
    private _getAvailablesCurrencies: ConexionService,
    public changeVariable: DashboardComponent
  ) { }

  ngOnInit(): void {
    this.getAvailablesCurrencies();
    const token = <any | string>localStorage.getItem('token');
    this.verifyAccess = decode<any | string>(token);
  }

  setModalOpen(res: string) {
    this.modalState.emit(res);
  }

  getAvailablesCurrencies() {
    this._getAvailablesCurrencies.getAvailableCurrencies().subscribe(data => {
      console.log(data)
      this.availablesCurrenciesTableData = data;
    }, error => console.log(error))
  }

}
