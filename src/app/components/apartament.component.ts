import { ApartamentServices } from './../services/apartament.services';
import {Component} from '@angular/core';


@Component({
    selector: 'apartament',
    template: `
    <h2 class="text-light">{{title}}</h2>
    <ul>
        <li *ngFor="let ap of apartamentos">
        {{ ap }}
        </li>
    </ul>
    `
})
export class ApartamentComponent{
    title = "Lista de Casas";
    apartamentos;

    constructor(service: ApartamentServices){
        this.apartamentos = service.getApartament();

    }

}