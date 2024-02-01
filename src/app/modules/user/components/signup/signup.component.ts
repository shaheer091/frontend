import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private signupService:UserService) {}
  mattta: any = '';
  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            this.passwordStrengthValidator,
          ],
        ],
        confirmPassword: ['', [Validators.required, this.matchPasswords]],
        terms: [false, Validators.requiredTrue],
      },
      { validators: this.matchPasswords }
    );
  }

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  passwordStrengthValidator(control: FormControl) {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasLowerCase = /[a-z]/.test(control.value);
    const hasDigit = /\d/.test(control.value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);

    if (
      control.value.length < 8 ||
      !hasUpperCase ||
      !hasLowerCase ||
      !hasDigit ||
      !hasSpecialChar
    ) {
      return { passwordStrength: true };
    }

    return null;
  }

  matchPasswords(group: FormGroup) {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');

    return password?.value === confirmPassword?.value
      ? null
      : { mismatchedPasswords: true };
  }

  onSubmit() {
    this.signupService.apiCall(this.signupForm.value).subscribe((res)=>{
      console.log(res);
    })
    console.log('Form submitted!', this.signupForm.value);
  }
}

export function noSpace(control: FormControl): ValidationErrors | null {
  const isSpace = (control.value || '').includes(' ');
  return isSpace ? { noSpace: true } : null;
}
