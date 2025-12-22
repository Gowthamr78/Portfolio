import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //    scrollTo(sectionId: string) {
  //   document.getElementById(sectionId)?.scrollIntoView({
  //     behavior: 'smooth'
  //   });
  // }
  // For smooth scrolling
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // For mobile hamburger menu
  toggleMobileMenu() {
    const nav = document.querySelector('.nav-links');
    if (nav) {
      nav.classList.toggle('active');
    }
  }


}
