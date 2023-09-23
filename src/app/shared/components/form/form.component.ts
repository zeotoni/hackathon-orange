import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
     this.registerForm = this.formBuilder.group({
      eventName: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      street: ['', [Validators.required]],
      number: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
      place: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(30)]],
      imageLink: ['', [Validators.required]]

     });
  }

  submit(): void {
    if(this.registerForm.valid && !this.registerForm.pending) {
      const newEvent = this.registerForm.getRawValue()
      console.log(newEvent)
    }
  }
}
