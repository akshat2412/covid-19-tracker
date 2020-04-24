import { Component, OnInit, Inject } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  public toggleCollapse(isCollapsed: boolean): void {
    if (!isCollapsed) {
      this.renderer.addClass(this.document.body, 'is-collapsed');
    } else {
      this.renderer.removeClass(this.document.body, 'is-collapsed');
    }
  }

}
