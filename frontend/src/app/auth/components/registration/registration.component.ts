import { Component, OnInit } from '@angular/core';
import { ICustomControl } from '@shared/models/form.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '@shared/services/form.service';
import { AuthService } from '@shared/services/auth.service';

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
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{1,}')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
