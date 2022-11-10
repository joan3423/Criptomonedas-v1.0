import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: Users[] = []

  constructor(
    private _getUsers: ConexionService
  ) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this._getUsers.getUsers().subscribe(data => {
      this.usersList = data.users;
    }, error => console.log(error))
  }

}
