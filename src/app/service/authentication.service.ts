import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private jwtHelper=new JwtHelperService();
  constructor() { }

  isTokenExpired():boolean{
    const token=this.getToken();
    if (!token) return true;
    return this.jwtHelper.isTokenExpired(token);
    
  }

  public isAuthenticated(): boolean {
    return this.getToken() !== null;

  }

  storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  storeTokenvalidity(token_validity: string) {
    localStorage.setItem("token_validity", token_validity);
  }

  
  

  getToken() {

     return localStorage.getItem("token"); // if empty return null
  }
  removeToken() {
     localStorage.removeItem("token");
  }

  StoreUserInfo(role: any) {

    localStorage.setItem('role', JSON.stringify(role));
  }

}
