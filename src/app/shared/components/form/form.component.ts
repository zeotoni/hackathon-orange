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
      street: ['', [Validators.required, Validators.minLength(10)]],
      number: ['', [Validators.required, Validators.maxLength(4)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', [Validators.required, Validators.minLength(5)]],
      cep: ['', [Validators.required]],
      place: ['', [Validators.required]],
      paiment: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(30)]],
      imageLink: ['', [Validators.required]]

     });
  }

  submit(): void {
    const newEvent = this.registerForm.getRawValue()
    console.log(newEvent)
  }
}
