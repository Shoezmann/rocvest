import {  AfterViewInit, Component, OnInit, ChangeDetectorRef} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    this.cdr.detectChanges();
  }
}
