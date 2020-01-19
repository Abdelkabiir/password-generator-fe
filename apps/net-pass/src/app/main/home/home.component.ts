import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'net-pass-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit{
    constructor() {

    }

    ngOnInit(): void {
    }

    logout(): void {
        console.log('Logged out !')
    }
}
