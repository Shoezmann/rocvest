import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

interface Job {
  title: string
  description: string
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit, AfterContentInit {

  jobs: Job[] = [
    {title: 'Junior Account Executive', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit magna, pulvinar sit amet ultricies suscipit, aliquam et ex. Praesent et enim velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum elementum laoreet. Sed vel leo lacus. Aenean accumsan dignissim ante, laoreet euismod massa mattis et. Pellentesque laoreet nulla non semper dictum. Vestibulum eleifend dolor ultricies quam bibendum fermentum. Aliquam erat volutpat.'},
    {title: 'Project Coordinator', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit magna, pulvinar sit amet ultricies suscipit, aliquam et ex. Praesent et enim velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum elementum laoreet. Sed vel leo lacus. Aenean accumsan dignissim ante, laoreet euismod massa mattis et. Pellentesque laoreet nulla non semper dictum. Vestibulum eleifend dolor ultricies quam bibendum fermentum. Aliquam erat volutpat.'},
    {title: 'Intermediate Software Engineer (.Net, C#, Angular)', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit magna, pulvinar sit amet ultricies suscipit, aliquam et ex. Praesent et enim velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum elementum laoreet. Sed vel leo lacus. Aenean accumsan dignissim ante, laoreet euismod massa mattis et. Pellentesque laoreet nulla non semper dictum. Vestibulum eleifend dolor ultricies quam bibendum fermentum. Aliquam erat volutpat.'},
    {title: 'Snr Account/Sales Executive', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit magna, pulvinar sit amet ultricies suscipit, aliquam et ex. Praesent et enim velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum elementum laoreet. Sed vel leo lacus. Aenean accumsan dignissim ante, laoreet euismod massa mattis et. Pellentesque laoreet nulla non semper dictum. Vestibulum eleifend dolor ultricies quam bibendum fermentum. Aliquam erat volutpat.'},
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
