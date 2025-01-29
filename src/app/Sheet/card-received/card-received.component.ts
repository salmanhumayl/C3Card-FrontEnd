import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-card-received',
  templateUrl: './card-received.component.html',
  styleUrls: ['./card-received.component.css']
})
export class CardReceivedComponent implements OnInit {

  Cards:any[] ;

   constructor(private AJESservice:AJESService,private modelService:BsModalService,
               private ngxService:NgxUiLoaderService,private router:Router){}
    
   ngOnInit(): void {
  
    this.PendingCardsReceving();
}

PendingCardsReceving(){
  this.ngxService.start();
  this.AJESservice.PendingCardsReceving().subscribe((data)=>  {

    this.Cards=data;
    this.ngxService.stop();
  });
}


CardDetail(BatchNo:string){
 
  this.router.navigate(['viewcard',BatchNo])
}


}
