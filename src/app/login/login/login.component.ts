import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { loginmodel } from '../../Model/loginmodel';
import { AJESService } from '../../service/app.service';
import { AuthenticationService } from '../../service/authentication.service';
import { MessengerService } from '../..//service/messenger.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginModel:loginmodel=new loginmodel();

  constructor(private AJESservice:AJESService,private modelService:BsModalService,
                 private ngxService:NgxUiLoaderService,private router:Router,
                 public authService: AuthenticationService,private msg:MessengerService){}

  onSubmitlogin(form:NgForm){
    this.ngxService.start();

    this.AJESservice.Login(this.LoginModel).subscribe((response:any)=>{
      if (response.token!=null){
        //this.authService.storeTokenvalidity(response.expiration);
        this.authService.storeToken(response.token);
        localStorage.setItem('Name', response.name);
        localStorage.setItem('Role', response.role);
        this.msg.isLoggedIn$.next(true);
        this.msg.isWelComeName$.next(response.name);
        this.msg.$Role.next(response.role);
        if (response.role=="A"){
            this.router.navigate(['/masterfile']);  
        }
        else{
          this.router.navigate(['/dashboard']);
        }
        this.ngxService.stop();
       }
       else{
        //this.notify.showError(response.message);
         //this.displaymessage.nativeElement.innerHTML=response.message;
         form.reset();
         this.ngxService.stop();
       }
       });


    
  }

}
