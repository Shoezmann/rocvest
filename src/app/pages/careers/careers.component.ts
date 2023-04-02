import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

interface Job {
  title: string
  email: string
  company: string
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit, AfterContentInit {

  jobs: Job[] = [
    {title: 'Account Executive', email: 'careers@rocvest.com', company: 'ROCVEST SYSTEMS (PTY) LTD - Information Technology'},
    {title: 'Sales Agent', email: 'careers@rocvest.com', company: 'ROCVEST SYSTEMS (PTY) LTD - Information Technology'},
    {title: 'Construction Quantity Surveyor', email: 'careers@rocvest.com', company: 'ROCVEST C3 (PTY) LTD - Construction, Civils, Consultants'},
    {title: 'Electrical Technician', email: 'careers@rocvest.com', company: 'ROCVEST ENERGY - a division of ROCVEST C3 (PTY) LTD'},
    {title: 'Project Coordinator', email: 'careers@rocvest.com', company: 'ROCVEST SYSTEMS (PTY) LTD - Information Technology'},
    {title: 'Intermediate Software Engineer (.Net, C#, Angular)', email: 'careers@rocvest.com', company: 'ROCVEST SYSTEMS (PTY) LTD - Information Technology'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(){
    this.jsfileload("/assets/js/vendor/jquery.min.js");
    this.jsfileload("/assets/js/vendor/jquery.easing.min.js");
    this.jsfileload("/assets/js/vendor/jquery.inview.min.js");
    this.jsfileload("/assets/js/vendor/popper.min.js");
    this.jsfileload("/assets/js/vendor/bootstrap.min.js");
    this.jsfileload("/assets/js/vendor/ponyfill.min.js");
    this.jsfileload("/assets/js/vendor/slider.min.js");
    this.jsfileload("/assets/js/vendor/animation.min.js");
    this.jsfileload("/assets/js/vendor/progress-radial.min.js");
    this.jsfileload("/assets/js/vendor/bricklayer.min.js");
    this.jsfileload("/assets/js/vendor/gallery.min.js");
    this.jsfileload("/assets/js/vendor/shuffle.min.js");
    this.jsfileload("/assets/js/vendor/cookie-notice.min.js");
    this.jsfileload("/assets/js/vendor/particles.min.js");
    this.jsfileload("/assets/js/main.js");
  }
  public jsfileload(url: any){
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
