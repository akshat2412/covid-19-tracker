import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IUser } from 'src/app/shared/models/user.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  public loginForm: FormGroup
  private returnUrl: string;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public login(userCredentials: IUser): void {
    this.authService.login(userCredentials);

    if(this.authService.isAuthenticated()) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
