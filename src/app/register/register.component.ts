import { UserService } from './../user.service';
import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent {
  constructor(private _DataService: DataService, private _Router: Router, private userService: UserService) {}

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Z]/)
    ]),
    lastName: new FormControl(''),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(60)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ])
  });

  onSubmit() {
    if (this.registerForm.valid && this.passwordsMatch()) {
      const email = this.registerForm.value.email!;
      const password = this.registerForm.value.password!;
      this.userService.signUp(email, password)
        .then(() => {
          console.log('Signed up successfully');
          this._Router.navigate(['/login']);
        })
        .catch(error => {
          console.error('Signup error:', error.code, error.message);
        });
    }
  }

  passwordsMatch(): boolean {
    return this.registerForm.controls.password.value === this.registerForm.controls.confirmPassword.value;
  }
}
