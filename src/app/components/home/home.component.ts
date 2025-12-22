import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
scrollTo(project: string) {
    document.getElementById(project)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
