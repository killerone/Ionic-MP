import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  @Input() iconName;
  @Input() title;

  constructor() {
  }

  ngOnInit() { }

  cardClick(title: string) {
    console.log(title + " card click");
  }
}
