import { Component, OnInit } from '@angular/core';
import { countries } from 'src/app/models/countries';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countriesList: countries[] = [];

  constructor(
    private _getCountriesList: ConexionService
  ) { }

  ngOnInit(): void {
    this.getCountriesList();
  }

  getCountriesList() {
    this._getCountriesList.getCountries().subscribe(data => {
      this.countriesList = data.country;
    }, error => console.log(error))
  }

}
