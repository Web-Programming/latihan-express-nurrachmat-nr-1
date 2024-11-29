import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { authGuardGuard } from './auth-guard.guard';
export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page',
        canActivate: [authGuardGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page',
    }

];
