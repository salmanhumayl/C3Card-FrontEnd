import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  isLoggedIn$=new BehaviorSubject(false);
  isWelComeName$=new BehaviorSubject('');
  ProjectName$=new BehaviorSubject('');
  $Role=new BehaviorSubject('');
  constructor() { 
    this.isLoggedIn$.subscribe();
    this.isWelComeName$.subscribe();
   this.ProjectName$.subscribe();


    this.initializeAuth();

  }

  
  initializeAuth() {
    // alert("initializeAuth");
       this.$Role.next(localStorage.getItem('Role')||'');
       const token: any = localStorage.getItem('token');
     if (token) {
       this.isLoggedIn$.next(true);
       this.isWelComeName$.next(localStorage.getItem('Name')||'');
       this.ProjectName$.next(localStorage.getItem('ProjectName')||'');
        
     }
     else{
       this.clearAuth();
     }
     }

     clearAuth() {
     // alert("clearAuth");
      this.isLoggedIn$.next(false);
      this.isWelComeName$.next('');
      this.ProjectName$.next('');
      this.$Role.next('');
      
      localStorage.removeItem('Name');
      localStorage.removeItem('ProjectName');
      
      localStorage.removeItem('token');
    
    }
}
