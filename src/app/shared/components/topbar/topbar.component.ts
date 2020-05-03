import { Component, OnInit, Output, EventEmitter, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  private isCollapsed: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {}

  public ngOnInit(): void {}

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.renderer.addClass(this.document.body, 'is-collapsed');
    } else {
      this.renderer.removeClass(this.document.body, 'is-collapsed');
    }
  }
}
