import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-card-activation',
  templateUrl: './card-activation.component.html',
  styleUrls: ['./card-activation.component.css']
})
export class CardActivationComponent implements OnInit{

  Cards:any[] ;

   constructor(private AJESservice:AJESService,private modelService:BsModalService,
               private ngxService:NgxUiLoaderService,private router:Router){}

  ngOnInit(): void {

  this.PendingCardsActivation();
}

PendingCardsActivation(){
  this.ngxService.start();
  this.AJESservice.PendingCardsActivation().subscribe((data)=>  {

    this.Cards=data;
    this.ngxService.stop();
  });
}




  CardDetail(BatchNo:string){
   
    this.router.navigate(['viewcardActivation',BatchNo])
  }

                         
}
