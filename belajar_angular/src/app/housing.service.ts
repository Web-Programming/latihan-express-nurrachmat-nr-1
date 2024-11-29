import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { User } from './models/user';
import { Auth } from './models/auth';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  //url = "http://localhost:3000/housing";
  url = "https://curly-space-telegram-q57jvq676h4w59-3000.app.github.dev";

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]>{
    const data = await fetch(`${this.url}/housing`);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: String) : Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.url}/housing/${id}`); //http://localhost:3000/housing/1
    return await data.json() ?? {};
  }

  submitApplication(firstName: String, lastName: String, 
    email: String){
      console.log(firstName, lastName, email);
  }


  //untuk kebutuhan login
  async loginAuth(user: User): Promise<Auth> {
    const data = await fetch(`${this.url}/users/login`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    return await data.json() ?? {};
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error);
  }
}
