import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-podcast',
  imports: [HeaderComponent, FooterComponent,],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent {

}
