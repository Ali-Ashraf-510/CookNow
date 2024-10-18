import { DataService } from './../data.service';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; 
  password: string = '';    

  constructor(private userService: UserService,private _Router:Router, private _DataService:DataService) { }

  login() {
    this.userService.login(this.email, this.password)
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Logged in successfully.',
          icon: 'success',
          timer: 900,  
        });
        this._DataService.isLogined.next(true)
          this._Router.navigate(['/home']); 

      })
      .catch((error) => {
        Swal.fire('Error!', error.message, 'error');
      });
  }
}