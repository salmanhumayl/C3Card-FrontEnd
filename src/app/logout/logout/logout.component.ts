import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  implements OnInit{
  constructor (private authService:AuthenticationService,private msg :MessengerService){}
  
  ngOnInit(): void {
  this.authService.removeToken();
  this.msg.isLoggedIn$.next(false);
  this.msg.isWelComeName$.next('');
  this.msg.$Role.next('');

  //window.location.href="http://localhost:4200";
  window.location.href="http://ajes-webApp2.ajes.ae/AJESCMS";

  }
}
