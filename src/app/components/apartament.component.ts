import { ApartamentServices } from './../services/apartament.services';
import {Component} from '@angular/core';


@Component({
    selector: 'apartament',
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let ap of apaertamentos">
        {{ ap }}
        </li>
    </ul>
    `
})
export class ApartamentComponent{
    title = "Lista de Casas";
    apaertamentos;

    constructor(service: ApartamentServices){
        this.apaertamentos = service.getApartament();

    }

}