import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Recycler Sales Dashboard',
      description: 'Angular dashboard for managing sales, invoices, and warehouse inventory.',
      tech: 'Angular, TypeScript, RxJS, HTML, CSS',
      github: 'https://github.com/yourusername/recycler-dashboard',
      demo: 'https://your-demo-link.com',
      image: 'assets/projects/dashboard.png'
    },
    {
      name: 'Portfolio Website',
      description: 'My personal portfolio showcasing my projects and skills.',
      tech: 'Angular, TypeScript, SCSS, HTML',
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio-link.com',
      image: 'assets/projects/portfolio.png'
    }
  ];
}
