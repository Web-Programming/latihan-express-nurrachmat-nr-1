import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  url = "http://localhost:3000";
  async submitRegister(registerdata : FormGroup) : Promise<Auth>{
    const input = {
      name : registerdata.value.name,
      email : registerdata.value.email,
      password : registerdata.value.password
    };
    const data = await fetch(`${this.url}/users/register`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({... registerdata.value})
    });
    return await data.json() ?? {};
  }

}
