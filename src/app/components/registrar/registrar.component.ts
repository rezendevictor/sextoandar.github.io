import { Swal } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeServices } from '../../services/home.service';

@Component({
  selector: 'registrarForm',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [HomeServices],
})
export class RegistrarComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private homeServices: HomeServices
  ) {
    const ex = {
      id: 'caiubi',
      address: {
        state: 'MG',
        city: 'BH',
        street: 'Av Amazonas',
        number: '7675',
        complement: 'Casa',
        reference: 'Ao lado do falecido barranco',
      },
      ownerID: '12345',
      description: 'CEFET',
      rent_value: 10,
      rooms: 1337,
      garage_spots: 420,
      living_rooms: 1,
      suites: 0,
      area: 123456789,
      cabinet: false,
      concierge24: true,
    };

    this.form = this.formBuilder.group({

      id: ['', []],
      ownerID: ['', [Validators.required]],
      rooms: ['', [Validators.required]],
      suites: ['', [Validators.required]],
      living_rooms: ['', [Validators.required]],
      garage_spots: ['', [Validators.required]],
      area: ['', [Validators.required]],
      cabinet: ['', [Validators.required]],
      description: ['', []],
      rent_value: ['', [Validators.required]],
      address: this.formBuilder.group({
        id: ['', []],
        street: ['', [Validators.required]],
        number: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        complement: ['', [Validators.required]],
        reference: ['', [Validators.required]],
        neighborhood: ['', [Validators.required]],

      }),
    });
  }

  ngOnInit(): void {
    console.log('teste');
  }
  submit() {
    console.log(this.form);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
    if (this.form.valid) {
      const response = this.homeServices
        .insert(this.form.value)
        .subscribe((res) => {
          console.log('res', JSON.stringify(res));
        });
      console.log(response);
    }
  }

  get address() {
    return this.form.get('address');
  }

  get neighborhood() {
    return this.form.get('neighborhood');
  }
}
