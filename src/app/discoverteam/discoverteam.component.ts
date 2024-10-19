import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-discoverteam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discoverteam.component.html',
  styleUrl: './discoverteam.component.css'
})
export class DiscoverteamComponent {
  teamMembers = [
    {
      name: 'Ali Ashraf',
      position: 'Project Manager',
      image: '../../assets/images/personal/ali_ashraf(1).jpg',
      linkedin: 'https://www.linkedin.com/in/ali-ashraf-b96672332/',
      twitter: 'https://x.com/alijustwrites',
      github: 'https://github.com/Ali-Ashraf-510'
    },
    {
      name: 'Ali Ibrahim',
      position: 'Founder and CTO',
      image: '../../assets/images/personal/ali ibrahim.jpg',
      linkedin: 'https://www.linkedin.com/in/ali-ibrahim-854156252',
      twitter: 'https://x.com/AbrahimEal26695?t=htGuGK6So73QWN5k_UlCMg&s=09',
      github: 'https://github.com/AliIbrahi1242003'
    },
    {
      name: 'Farouq Mohamed',
      position: 'Founder and CTO',
      image: '../../assets/images/personal/farouq.jpg',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    },
    {
      name: 'Abdul Rahman Ahmad ',
      position: 'Devolper',
      image: 'path-to-image/jane.jpg',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      github: 'https://github.com/janesmith'
    },
    {
      name: 'Habiba Osama',
      position: 'Devolper',
      image: '../../assets/images/personal/',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    },
    {
      name: 'hanna magdy',
      position: 'Devolper',
      image: 'path-to-image/jane.jpg',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      github: 'https://github.com/janesmith'
    },
  ];
}
