import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

interface Job {
  title: string
  email: string
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit, AfterContentInit {

  jobs: Job[] = [
    {title: 'Junior Account Executive', email: 'careers@rocvest.com'},
    {title: 'Project Coordinator', email: 'careers@rocvest.com'},
    {title: 'Intermediate Software Engineer (.Net, C#, Angular)', email: 'careers@rocvest.com'},
    {title: 'Snr Account/Sales Executive', email: 'careers@rocvest.com'},
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
