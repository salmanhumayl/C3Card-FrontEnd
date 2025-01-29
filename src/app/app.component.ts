import { Component } from '@angular/core';
import { MessengerService } from './service/messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor(public msg:MessengerService){}


}
