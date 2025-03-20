import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-magazine',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.css'
})
export class MagazineComponent {

}
