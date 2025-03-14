import { Component, viewChild } from '@angular/core';
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
      consent: new FormControl('', Validators.requiredTrue),
    },
    Validators.required
  );
  dialogModal: any = viewChild<any>('succesDialog');

  onSubmit() {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
    } else {
      this.dialogModal()?.nativeElement.showModal();
      setTimeout(() => {
        this.dialogModal()?.nativeElement.close();
      }, 6000);
    }

    console.log(this.formGroup.value);
  }

  onRadioFocus() {
    if (this.formGroup.controls.queryType.value === '') {
      this.formGroup.controls.queryType.setValue('general-enquiry');
    }
  }
}
