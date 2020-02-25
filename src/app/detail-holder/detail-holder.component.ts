import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detail-holder',
  templateUrl: './detail-holder.component.html',
  styleUrls: ['./detail-holder.component.scss'],
})
export class DetailHolderComponent implements OnInit {

  @Input() data;
  @Input() iconName;
  @Input() isDate = false;

  constructor() { }

  ngOnInit() { }

}
