import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Job {
  title: string
  email: string
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  jobs: Job[] = [
    {title: 'Junior Account Executive', email: 'careers@rocvest.com'},
    {title: 'Project Coordinator', email: 'careers@rocvest.com'},
    {title: 'Intermediate Software Engineer (.Net, C#, Angular)', email: 'careers@rocvest.com'},
    {title: 'Snr Account/Sales Executive', email: 'careers@rocvest.com'},
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
}
