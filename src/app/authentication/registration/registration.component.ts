import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirm: ['', [Validators.required]]
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    const password = group.controls.password.value;
    const confirm = group.controls.confirm.value;

    return password === confirm ? null : { notSame: true };
  }


  submit(form: FormGroup) {
    console.log(form.value);
    const { email,  firstName, lastName, password } = form.value;
    this.authService.signup(email,  firstName, lastName, password);
  }
}
