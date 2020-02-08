import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PasswordApi } from '../../core/api/password.api';

@Component({
    selector: 'net-pass-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit{
    passwordSettingsForm: FormGroup;
    passSettings = {
        length: 6,
        numbers : false,
        lowerCase : false,
        upercase : false,
        ASCIISymbols : false,
        space : false,
    }
    password = '';
    
    constructor(private router: Router, private passApi: PasswordApi) {
        this.passwordSettingsForm = new FormGroup({
            length: new FormControl(''),
        })
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.router.navigateByUrl('login')
    }

    changeValue(option) {
        this.passSettings[option] = ! this.passSettings[option];
    }

    generatePassword() {
        this.passSettings.length = this.passwordSettingsForm.get('length').value || this.passSettings.length,
        this.passApi
          .generatePassword(this.passSettings)
          .subscribe(data => {
            this.password = data.password
            return data;
          })
      }
}
