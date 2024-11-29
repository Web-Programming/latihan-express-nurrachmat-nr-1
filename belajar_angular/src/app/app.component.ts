import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from './models/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'belajar_angular';
  router: Router = inject(Router)
  authenticationService: AuthenticationService = inject(AuthenticationService)

  public isLoggedIn() : boolean {
    return this.authenticationService.isLoggedIn();
  }

  public doLogout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }

  public getUsername(): string {
    const user : User | null = this.authenticationService.getCurrentUser();
    return user ? user.name : 'Guest';
  }
}
