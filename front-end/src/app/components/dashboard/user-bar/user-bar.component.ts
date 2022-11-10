import { Component, OnInit } from '@angular/core';
import { 
  faUserAlt,
  faMailBulk
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  faUserAlt = faUserAlt;
  faMailBulk = faMailBulk;
  
  showOptions: boolean = false;

  constructor() { }

  showPorfileOptions() {
    this.showOptions = this.showOptions ? false : true;
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  ngOnInit(): void {

  }

}
