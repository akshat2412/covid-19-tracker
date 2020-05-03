import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public value: number | string;

  @Input()
  public color: string;

  public colorClasses: string[];

  constructor() { }

  ngOnInit(): void {
    const backGroundColorClass = `bgc-${this.color.toLowerCase()}-50`;
    const fontColorClass = `c-${this.color.toLowerCase()}-500`;

    this.colorClasses = [
      backGroundColorClass,
      fontColorClass
    ];
  }

}
