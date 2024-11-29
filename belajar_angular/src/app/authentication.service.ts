import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from './storage';
import { User } from './models/user';
import { HousingService } from './housing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage:Storage,
    private housingService : HousingService
  ) { }

  public login(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      this.housingService.loginAuth(user)
        .then((response) => {     
            if(response?.message != null){
              reject(response);
            }else if(response?.token != null){
              resolve(this.saveToken(response.token))
            }else{
              reject(response);
            }
          }).catch((e)=>{
            console.log(e);
            reject(e);
          })
    })
  }

  //untuk mengambil token
  public getToken(): any {
    return this.storage.getItem("app-token");
  }

  //untuk menyimpan token
  public saveToken(token: string): void {
    this.storage.setItem("app-token", token);
  }

  //untuk kebutuhan login
  public isLoggedIn(): boolean {
    const token: string =  this.getToken();
    if(token){
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    }else{
      return false;
    }
  }

  //untuk kebutuhan logout
  public logout(): void{
    this.storage.removeItem("app-token");
  }

  //untuk mengabil info user
  public getCurrentUser(): User | null {
    if(this.isLoggedIn()){
      const token: string = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
    return null;
  }
}
