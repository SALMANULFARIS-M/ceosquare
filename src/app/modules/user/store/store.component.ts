import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store',
  imports: [HeaderComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})

export class StoreComponent {

  showModal = false;
  selectedProduct = '';
  orderForm: FormGroup;
  activeProduct: string | null = null;
  products = [
    {
      name: 'CEO Square Polo Neck T-Shirt',
      description: 'Step into every meeting with confidence and style in the CEO Square Polo Neck T-Shirt. Made from premium, breathable fabric, this t-shirt combines comfort with a professional look, perfect for networking events, pitch days, or casual Fridays. The subtle yet bold CEO Square logo on the chest represents your connection to a community of innovators and leaders. Available in classic colors to suit every wardrobe.',
      image: '/t-shirt.jfif',
      features: [
        'Material: 100% premium cotton for all-day comfort.',
        'Fit: Regular fit, unisex design.',
        'Logo Placement: Embroidered logo on the chest.',
        'Colors: Black, Navy Blue, White.'
      ],
      price: '₹1199',
      tagline: 'Wear Your Ambition.',
      productKey: 'T-Shirt'
    },
    {
      name: 'CEO Square Logo Mug',
      description: 'Start your day with inspiration and a cup of ambition with the CEO Square Logo Mug. This high-quality ceramic mug is designed for durability and style, featuring the CEO Square logo prominently on both sides. Whether you’re brainstorming ideas or sipping coffee during a mentor session, this mug is your daily reminder to think big and act bold.',
      image: '/mug.jfif',
      features: [
        'Material: Premium ceramic, microwave and dishwasher safe.',
        'Capacity: 12 oz (350 ml).',
        'Design: Double-sided logo for visibility.',
        'Colors: Navy blue mug with gold and white logo.'
      ],
      price: '₹399',
      tagline: 'Fuel Your Startup Journey.',
      productKey: 'Mug'
    },
    {
      name: 'CEO Square Organizer with Pen',
      description: 'Stay organized and professional with the CEO Square Organizer with Pen. This sleek, compact organizer features multiple compartments for notes, business cards, and essentials, making it perfect for entrepreneurs on the go. The CEO Square logo is elegantly printed on the cover, while the included premium pen ensures you’re always ready to jot down your next big idea.',
      image: '/dairy.png',
      features: [
        'Material: Durable faux leather with a smooth finish.',
        'Pen: Stainless steel, engraved with the CEO Square logo.',
        'Colors: Black, Brown.'
      ],
      price: '₹799',
      tagline: 'Organize Your Vision, One Idea at a Time.',
      productKey: 'Organizer'
    }
  ];





  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  toggleProductDetails(productKey: string) {
    this.activeProduct = this.activeProduct === productKey ? null : productKey;
  }
  openModal(product: string) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.orderForm.reset();
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const orderData = {
        ...this.orderForm.value,
        product: this.selectedProduct
      };
      // this.http.post('/api/send-order', orderData).subscribe(() => {
      //   alert('Order Submitted! We will contact you soon.');
      //   this.closeModal();
      // });
    }
  }
}
