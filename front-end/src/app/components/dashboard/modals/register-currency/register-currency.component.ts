import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { availablesCurrenciesList } from 'src/app/models/availablesCurrencies';
import { ConexionService } from 'src/app/services/conexion.service';
import { DashboardComponent } from '../../dashboard.component';

@Component({
  selector: 'app-register-currency',
  templateUrl: './register-currency.component.html',
  styleUrls: ['./register-currency.component.scss']
})
export class RegisterCurrencyComponent implements OnInit {

  newCurrencyForm: FormGroup;

  @Input() modalState = <string>("")
  @Output() closeModal = new EventEmitter<string>();

  constructor(
    public isModalOpen: DashboardComponent,
    private router: Router,
    private fb: FormBuilder,
    private _newCurrency: ConexionService) {
    this.newCurrencyForm = this.fb.group({
      name: ['', Validators.required],
      symbol: ['', Validators.required],
      value: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const newCurrencyValues: availablesCurrenciesList = {
      name: this.newCurrencyForm.get('name')?.value,
      symbol: this.newCurrencyForm.get('symbol')?.value,
      value: this.newCurrencyForm.get('value')?.value

    }
    this._newCurrency.newCurrency(newCurrencyValues).subscribe((res: any) => {
      this.closeModal.emit('closed');
      return res;
    })
  }


}
