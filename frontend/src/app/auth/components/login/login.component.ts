import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICustomControl } from '@shared/models/form.model';
import { FormService } from '@shared/services/form.service';
import { AuthService } from '@shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginFrom = this.fb.group({
      loginName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.errorMessage = '';
    if (this.loginFrom.valid) {
      this.authService.logIn(this.loginFrom.value).toPromise().then((res) => {
        if (res && res['user']) {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = res && res['error'] && res['error'].message;
        }
      });
    }
  }

}
