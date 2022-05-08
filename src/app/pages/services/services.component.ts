import {  AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
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

}
