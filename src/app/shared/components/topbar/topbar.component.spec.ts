import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarComponent } from './topbar.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarComponent ],
      providers: [AuthService, Router, Renderer2]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout when onClickLogout is called', () => {
    let authService = TestBed.get(AuthService)
    spyOn(authService, 'logOut').and.callThrough();
    component.onClickLogout();
    expect(authService.logOut).toHaveBeenCalled();
  });

  it('should set isLoggedIn to false when onClickLogout is called', () => {
    component.onClickLogout();
    expect(component.isLoggedIn).toBeFalse();
  })
});
