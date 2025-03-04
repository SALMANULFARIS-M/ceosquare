import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms',
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {

}
