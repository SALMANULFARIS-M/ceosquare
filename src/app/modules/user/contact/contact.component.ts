import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = false; // Loader state

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
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

      fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.contactForm.value),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.isLoading = false; // Loader state
            this.toastr.success('Message sent successfully!', 'Success');
            this.contactForm.reset();
          } else {
            this.toastr.error('Error sending message.', 'Error');
          }
        })
        .catch(() => {
          this.toastr.error('Error sending message.', 'Error');
        });
    } else {
      this.contactForm.markAllAsTouched();
      this.toastr.warning('Please fill out the form correctly.', 'Validation Error');
    }
  }
}

