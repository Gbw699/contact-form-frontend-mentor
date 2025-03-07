import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  formGroup = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      queryType: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      consent: new FormControl(false, Validators.requiredTrue),
    },
    Validators.required
  );

  onSubmit() {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
    }
  }
}
