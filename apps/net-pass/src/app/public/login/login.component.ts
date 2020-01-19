import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'net-pass-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    username: String;
    password: String;

    constructor(private router: Router) {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
          });
    }

    ngOnInit(): void {
    }

    login(): void {
        this.username = this.loginForm.get('username').value,
        this.password = this.loginForm.get('password').value
        console.log('login !')
        this.router.navigateByUrl('home')
    }
}
