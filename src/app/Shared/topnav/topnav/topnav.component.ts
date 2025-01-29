import { AfterViewInit, Component } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service';

declare const $:any;

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements AfterViewInit {

  constructor(public msg:MessengerService){}

  ngAfterViewInit(){
   
    this.toggleSideBar();
  }


  toggleSideBar (){


  if ($('.toggle-sidebar-btn')) {
     
    $(document).on('click', '.toggle-sidebar-btn', function() {
     // $(document).select('body').classList.toggle('toggle-sidebar')
     var body = document.getElementsByTagName("body")[0];
     body.classList.toggle('toggle-sidebar');
    })
  }
}

}
