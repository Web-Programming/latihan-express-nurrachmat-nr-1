import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router: Router = inject(Router);
  authenticationService: AuthenticationService = inject(AuthenticationService);

  public credentials = {
    name: "",
    email: "",
    password: ""
  }

  public formError: string = ''
  public onLoginSubmit(): void{
    this.formError = '';
    if(!this.credentials.email || !this.credentials.password){
      this.formError = 'All fields are required, please try again';
    }else{
      this.doLogin();
    }
  }

  public doLogin(): void {
    this.authenticationService.login(this.credentials)
      .then((res) => {
        this.router.navigateByUrl('/');
      })
      .catch((error) => {
        if(error?.message){
          this.formError = error.message;
        }else{
          this.formError = error?.error?.message;
        }
      })
    }
}
