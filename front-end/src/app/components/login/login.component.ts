import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ConexionService } from '../../services/conexion.service';
import { Router } from "@angular/router";
import { Users } from "src/app/models/users";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class Login {

    loginForm: FormGroup;
    listOfUsers = [];

    constructor(
        private router: Router,
        private ConexionService: ConexionService,
        private fb: FormBuilder,
        private _newLogin: ConexionService) {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    onSubmit() {
        const newSesion: Users = {
            userName: this.loginForm.get('userName')?.value,
            password: this.loginForm.get('password')?.value
        }
        this._newLogin.newLogin(newSesion).subscribe(res => {
            console.log(res)
        })
    }

    listarUsuarios() {
        this.ConexionService.getUsers().subscribe(data => {
            return this.listOfUsers = data
        }, error => console.log(error));
    }

    ngOnInit(): void {
        console.log(this.listOfUsers)
    }

    /* newLogin() {
        const user: Users = (
            user: user
        )
    } */
}