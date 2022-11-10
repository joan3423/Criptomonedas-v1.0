import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCoins,
  faBitcoinSign,
  faList,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import decode from 'jwt-decode';

@Component({
  selector: 'app-operation-bar',
  templateUrl: './operation-bar.component.html',
  styleUrls: ['./operation-bar.component.scss']
})
export class OperationBarComponent implements OnInit {

  verifyAccess = <any | string>({role: "denegado"})

  faBitcoinSign = faBitcoinSign;
  faList = faList;
  faCoins = faCoins;
  faUser = faUser;
  router: string;

  constructor(
    private _router: Router
  ) { this.router = _router.url; }


  ngOnInit(): void {
    const token = <any | string>localStorage.getItem('token');
    this.verifyAccess = decode<any | string>(token);
  }

}
