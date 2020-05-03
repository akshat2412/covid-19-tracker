import { Component, OnInit, Output, EventEmitter, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  public isLoggedIn: boolean = false;
  private isCollapsed: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private authService: AuthService,
  ) {}

  public ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.renderer.addClass(this.document.body, 'is-collapsed');
    } else {
      this.renderer.removeClass(this.document.body, 'is-collapsed');
    }
  }

  public onClickLogout(): void {
    this.authService.logOut();
    this.isLoggedIn = false;
  }
}
