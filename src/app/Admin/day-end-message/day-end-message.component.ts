import { Component } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-day-end-message',
  templateUrl: './day-end-message.component.html',
  styleUrls: ['./day-end-message.component.css']
})
export class DayEndMessageComponent {

  constructor(public msg:MessengerService){}
      
}
