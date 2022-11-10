import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyCurrencies } from 'src/app/models/myCurrencies';
import { ConexionService } from 'src/app/services/conexion.service';
import { DashboardComponent } from '../../dashboard.component';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.scss']
})
export class AddCurrencyComponent implements OnInit {

  @Output() closeModal = new EventEmitter<string>();

  addCurrencyForm: FormGroup;

  availablesCurrencies: MyCurrencies[] = [];
  getCurrenciesBySelector: MyCurrencies[] = [];

  constructor(
    public isModalOpen: DashboardComponent,
    private router: Router,
    private fb: FormBuilder,
    private _addCurrency: ConexionService,) {
    this.addCurrencyForm = this.fb.group({
      id: ['', Validators.required],
      inPossession: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getAvailablesCurrenciesByCountries();
  }

  getAvailablesCurrenciesByCountries() {
    this._addCurrency.getAvailableCurrencies().subscribe(data => {
      this.availablesCurrencies = data;
    }, error => console.log(error))
  }

  onSubmit() {
    const addCurrencyValues: MyCurrencies = {
      id: this.addCurrencyForm.get('id')?.value,
      inPossession: this.addCurrencyForm.get('inPossession')?.value

    }
    this._addCurrency.addCurrency(addCurrencyValues).subscribe((res: any) => {
      this.closeModal.emit('closed');
      return res;
    })
  }

}
