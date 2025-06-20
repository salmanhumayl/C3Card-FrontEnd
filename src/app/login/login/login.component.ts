import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { loginmodel } from '../../Model/loginmodel';
import { AJESService } from '../../service/app.service';
import { AuthenticationService } from '../../service/authentication.service';
import { MessengerService } from '../..//service/messenger.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginModel:loginmodel=new loginmodel();

  constructor(private AJESservice:AJESService,private modelService:BsModalService,
                 private ngxService:NgxUiLoaderService,private router:Router,
                 public authService: AuthenticationService,private msg:MessengerService,private toastrService:ToastrService){}

  onSubmitlogin(form:NgForm){
    this.ngxService.start();

    this.AJESservice.Login(this.LoginModel).subscribe({
     next:response=>{
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
        else if(response.role=="O"){
          this.router.navigate(['/masterfile']);
        }
        else {
          this.router.navigate(['/filteroffdashboard']);
        }
        this.ngxService.stop();
       }
      
       else{
         alert("Invalid Credentials");
         this.toastrService.success("Invalid Credentails");
         
         form.reset();
         this.ngxService.stop();
       }
      },
         error:(error:HttpErrorResponse)=>{
            alert(error.error + " " +  error.status.toString());
           this.ngxService.stop();
        }

       });


    
  }

}
