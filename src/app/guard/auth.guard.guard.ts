import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { MessengerService } from '../service/messenger.service';

@Injectable({
  providedIn: 'root'
})

 class AdminGuard  {

  constructor(public auth:AuthenticationService,public router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {


     // if (!this.auth.isAuthenticated())
       // {
           
        //  alert(1);  
           if (this.auth.isTokenExpired()){
             this.auth.removeToken();
             this.router.navigate(['/login'],{ replaceUrl: true });  
             return false;
           }
          //this.router.navigate(['/login'], { replaceUrl: true });
         // return false;
       // }
      return true;
    }
  }
  
export const IsAdminGuard:CanActivateFn=(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean=>{
 return inject(AdminGuard).canActivate(route,state);
}


     // if (!this.auth.isAuthenticated())
       // {
            // this.router.navigate(['/login'],{ replaceUrl: true });  
            // return false;
      
     //}