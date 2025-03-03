import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent,FooterComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
    //   this.service.sendContactForm(this.contactForm.value).subscribe({
    //     next: (response) => {
    //       this.toastr.success('Message sent successfully!', 'Success');
    //       this.contactForm.reset(); // Reset the form after successful submission
    //     },
    //     error: (error) => {
    //       this.toastr.error('There was an error sending your message.', 'Error');
    //     }
    //   });
    // } else {
    //   this.contactForm.markAllAsTouched();
    //   this.toastr.warning('Please fill out the form correctly.', 'Validation Error');
     }
  }
}
