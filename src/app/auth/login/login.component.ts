import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsersService } from "../../services/users.service";
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  message = '';
  message2 = '';

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.message2 = 'you can login'
        }
      });

    this.form = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {

        if(user) {
          if (user.password === formData.password) {
            this.message = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/system'])
          } else { this.message = 'wrong password'}
          
        } else {
          this.message = 'no user'
        }
      })

  }
}
