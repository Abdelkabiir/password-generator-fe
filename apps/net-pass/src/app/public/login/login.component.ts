import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'net-pass-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    username: String;
    password: String;
    returnUrl: string;
    error = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService) {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
          });

        if (this.authService.currentUserValue) { 
            this.router.navigate(['/home']);
        }
    }

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    login(): void {
        this.username = this.loginForm.get('username').value,
        this.password = this.loginForm.get('password').value
        // this.router.navigateByUrl('home')

        this.authService.login({username: this.username, password: this.password})
            .pipe(first())
            .subscribe(data => {
                this.router.navigate([this.returnUrl]);
            }, error => {
                this.error = error;
            });
    }
}
