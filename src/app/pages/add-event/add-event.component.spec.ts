import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventComponent } from './add-event.component';
import { FormComponent } from 'src/app/shared/components/form/form.component';
import { ContainerComponent } from 'src/app/shared/components/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddEventComponent', () => {
  let component: AddEventComponent;
  let fixture: ComponentFixture<AddEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventComponent, FormComponent, ContainerComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
