import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Output()
  public toggleCollapse: EventEmitter<boolean>;

  private isCollapsed: boolean = false;
  constructor() {
    this.toggleCollapse = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.toggleCollapse.emit(this.isCollapsed);
  }
}
