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
    console.log(this.services);
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
        link: '/services/details'
      },
      {
        id: 2,
        description: 'Our focus on smart construction adopts the use of digital technologies and intelligent systems to optimise the planning, design, construction, and management of buildings and infrastructure.',
        title: 'Smart Construction',
        icon: 'organization',
        link: '/services/details'
      },
      {
        id: 3,
        description: 'Our professional consulting services that help organisations manage their information technology (IT) assets and resources effectively. ROCVEST has experienced consultants who have expertise in IT management, governance, and best practices.',
        title: 'Management Consulting',
        icon: 'organization',
        link: '/services/details'
      },
      {
        id: 4,
        description: 'We provide cybersecurity consulting services are professional services that help businesses and organisations protect their digital assets from cyber threats and attacks. These services are typically provided by experienced cybersecurity professionals who have expertise in identifying and addressing vulnerabilities in computer systems, networks, and data.',
        title: 'Cybersecurity Consulting',
        icon: 'organization',
        link: '/services/details'
      },
      {
        id: 5,
        description: 'Our professional services provide information and communications technology (ICT) services to help organisations manage and optimise their technology infrastructure and operations. Our experienced ICT professionals have expertise in a wide range of technologies, including hardware, software, networking, and telecommunications.',
        title: 'ICT Partner',
        icon: 'organization',
        link: '/services/details'
      },
      {
        id: 6,
        description: 'We specialise in helping organisations augment their software development teams with additional talent and resources. These services are provided by experienced software development professionals who have expertise in a wide range of technologies, programming languages, and development methodologies.',
        title: 'Team Augmentation',
        icon: 'organization',
        link: '/services/details'
      },
      {
        id: 7,
        description: 'We provide Software as a Service services, which is cloud computing model that allows organisations to access software applications over the internet, rather than installing and running them on their own computers or servers. SaaS applications are typically delivered through a web browser, and users pay a subscription fee to access the software. We provide Infrastructure as a Service services, which is a cloud computing model that provides organisations with access to virtualized computing resources such as servers, storage, and networking over the internet. With IaaS, organizations can avoid the expense and complexity of building and managing their own physical infrastructure, and instead rent computing resources on a pay-as-you-go basis.',
        title: 'SaaS & IaaS',
        icon: 'organization',
        link: '/services/details'
      },
      {
        id: 8,
        description: 'We provide IT skills development and training services helping organisations develop and improve their IT skills. These services are delivered through a combination of classroom instruction, hands-on training and online learning modules. We cover a wide range of topics related to IT, including governance, cybersecurity, programming languages, automation, end user computing and more.',
        title: 'Skills Development & Training',
        icon: 'organization',
        link: '/services/details'
      },

    ]
  }

}
