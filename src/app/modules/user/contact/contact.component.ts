import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = false; // Loader state

  constructor(private fb: FormBuilder, private toastr: ToastrService, private service: ContactService) {
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
      this.isLoading = true; // Loader state
      const data = this.contactForm.value; // Get the form values

      this.service.sendContactForm(data).subscribe({
        next: (response) => {
          this.toastr.success('Submitted! We will contact you soon.', 'Success');
          this.isLoading = false; // Reset loader state
        },
        error: (error) => {
          this.isLoading = false; // Reset loader state
          this.toastr.error('Failed to send email. Please try again.', 'Error');
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
      this.toastr.warning('Please fill out the form correctly.', 'Validation Error');
    }
  }
}


