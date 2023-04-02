import { Component, OnInit } from '@angular/core';


let currentYear: string;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear = this.getCurrentYear();

  constructor() { }

  ngOnInit(): void {

  }

  getCurrentYear(): number {
    const today = new Date();
    const year = today.getFullYear();

    return year;
  }

}
