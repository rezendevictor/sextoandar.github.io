import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'registrarForm',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
    if (this.form.valid) return;
  }

  get address() {
    return this.form.get('address');
  }

  get neighborhood() {
    return this.form.get('neighborhood');
  }
}
