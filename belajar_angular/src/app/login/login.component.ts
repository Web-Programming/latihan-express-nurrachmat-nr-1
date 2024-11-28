import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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
      .then(() => {
        this.router.navigateByUrl('/todo');
      })
      .catch((error) => {
          this.formError = error?.error?.message;
      })
    }
}
