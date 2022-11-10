import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private _newLogin: ConexionService) {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    onSubmit() {
        const newSesion: Users = {
            email: this.loginForm.get('email')?.value,
            password: this.loginForm.get('password')?.value
        }
        this._newLogin.newLogin(newSesion).subscribe((res: any) => {
            localStorage.setItem('token', res.token)
            this.router.navigate(['dashboard/deviceList'])
            console.log(res)
        })
    }

    ngOnInit(): void {
        console.log(this.loginForm)
    }
}