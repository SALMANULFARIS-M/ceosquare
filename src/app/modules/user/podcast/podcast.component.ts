import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-podcast',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent {
  videos = [
    {
      id: 'qLqZpE5TcXs',
      title: 'Franchisify makes the entire process simple and scalable.',
      desc: 'Franchisify helps business owners start their own franchise, grow their presence, and build a successful franchise. From planning to execution.',
    },
    {
      id: 'PKVQyPNiiJk',
      title: 'Purpose-Driven Ideas Create Real Impact',
      desc: 'We sit down with Nihal, the founder of Karumitra, to explore the journey of turning a purpose-driven idea into a meaningful venture.',
    },
    {
      id: 'pSvaHOlvLCg',
      title: 'WAWU - Hustle, Heart & Honest Conversations',
      desc: 'From overcoming challenges to finding meaning in the hustle, this is more than just an interview — it’s a journey through ideas, impact, and inspiration.',
    },
    {
      id: 'Hp5DclfXKdM',
      title: 'Explore Flyrad with Abhirami',
      desc: 'FlyRad is your ultimate guide to soaring careers in aviation. Whether you dream of becoming a pilot, cabin crew, or aviation manager.',
    },
    {
      id: '5CeQiY2neVU',
      title: 'The aroma of biryani and the pain behind it',
      desc: 'A beautiful story that combines the exquisite taste of biryani from the heart of Coimbatore with the hard work of the person behind it.',
    },
    {
      id: 'EbBTNG2i-kQ',
      title: 'Fueling Founders, Shaping Futures ',
      desc: 'CEO of IncubeNation Bengaluru, a startup incubator built by Ique Ventures to supercharge early-stage startups.',
    },
  ];
}
