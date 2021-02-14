import { Component, OnInit } from '@angular/core';
import { ICustomControl } from '@shared/models/form.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '@shared/services/form.service';
import { AuthService } from '@shared/services/auth.service';
import { PasswordMatcher } from '@shared/drectives/password-matcher.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      loginName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]]
    });
    this.registerForm.setValidators(PasswordMatcher);
  }

  createAccount() {
    this.errorMessage = '';
    if (this.registerForm.valid) {
      this.authService.register({loginName: this.registerForm.value.loginName, password: this.registerForm.value.password,})
        .toPromise().then((res) => {
          if (res && res['user']) {
            this.router.navigate(['/home']);
          }
        }).catch((err) => this.errorMessage = 'Same user! Please choose different user name');
    }
  }

}
