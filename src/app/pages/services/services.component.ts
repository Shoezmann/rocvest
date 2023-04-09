import {  AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from './services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  services: Services[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.servicesDetails();
  }

  ngAfterViewInit(){
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

  jsfileload(url: any){
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  goToDetails(){
    this.router.navigate(['services', 'details']);
  }

  servicesDetails(){
    this.services = [
      {
        id: 1,
        description: 'Software engineering services are professional services that help businesses and organisations design, develop, test, deploy, and maintain software applications. ROCVEST has experienced software engineers who have expertise in a range of programming languages, platforms, and tools to development software solutions at scale.',
        title: 'Software Engineering',
        icon: 'organization',
        link: ''
      },
      {
        id: 2,
        description: 'Software engineering services are professional services that help businesses and organisations design, develop, test, deploy, and maintain software applications. ROCVEST has experienced software engineers who have expertise in a range of programming languages, platforms, and tools to development software solutions at scale.',
        title: 'Software Engineering',
        icon: 'organization',
        link: ''
      },
      {
        id: 3,
        description: 'Software engineering services are professional services that help businesses and organisations design, develop, test, deploy, and maintain software applications. ROCVEST has experienced software engineers who have expertise in a range of programming languages, platforms, and tools to development software solutions at scale.',
        title: 'Software Engineering',
        icon: 'organization',
        link: ''
      },
      {
        id: 4,
        description: 'Software engineering services are professional services that help businesses and organisations design, develop, test, deploy, and maintain software applications. ROCVEST has experienced software engineers who have expertise in a range of programming languages, platforms, and tools to development software solutions at scale.',
        title: 'Software Engineering',
        icon: 'organization',
        link: ''
      },
      {
        id: 5,
        description: 'Software engineering services are professional services that help businesses and organisations design, develop, test, deploy, and maintain software applications. ROCVEST has experienced software engineers who have expertise in a range of programming languages, platforms, and tools to development software solutions at scale.',
        title: 'Software Engineering',
        icon: 'organization',
        link: ''
      },
      {
        id: 6,
        description: 'Software engineering services are professional services that help businesses and organisations design, develop, test, deploy, and maintain software applications. ROCVEST has experienced software engineers who have expertise in a range of programming languages, platforms, and tools to development software solutions at scale.',
        title: 'Software Engineering',
        icon: 'organization',
        link: ''
      },
      {
        id: 7,
        description: 'Software engineering services are professional services that help businesses and organisations design, develop, test, deploy, and maintain software applications. ROCVEST has experienced software engineers who have expertise in a range of programming languages, platforms, and tools to development software solutions at scale.',
        title: 'Software Engineering',
        icon: 'organization',
        link: ''
      },
      {
        id: 8,
        description: 'Software engineering services are professional services that help businesses and organisations design, develop, test, deploy, and maintain software applications. ROCVEST has experienced software engineers who have expertise in a range of programming languages, platforms, and tools to development software solutions at scale.',
        title: 'Software Engineering',
        icon: 'organization',
        link: ''
      },

    ]
  }

}
