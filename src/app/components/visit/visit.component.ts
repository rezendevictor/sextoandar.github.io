import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css'],
})
export class VisitComponent implements OnInit {
  id: number;
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      date: [''],
      houseId: [''],
    });
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  readonly getRouteId = {
    next: (params) => {
      this.id = +params['id'];
      this.getResourceDetails(this.id);
    },
  };

  getResourceDetails(id: number) {}

  ngOnInit(): void {
    this.route.params.subscribe(this.getRouteId);
  }

  submit() {
    if (this.form.valid) console.log(this.form);
  }
}
