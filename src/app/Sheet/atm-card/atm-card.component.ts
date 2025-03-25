import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-atm-card',
  templateUrl: './atm-card.component.html',
  styleUrls: ['./atm-card.component.css']
})
export class AtmCardComponent implements OnInit{
  CashBankRecord:any[] | undefined;
  nTotalRecord:number;

constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,public msg:MessengerService){}
  ngOnInit(): void {
 
    this.GetAtmCard();
 
}

GetAtmCard(){
  this.ngxService.start();
  this.AJESservice.GetAtmCard().subscribe((data)=>  {
  this.CashBankRecord=data;
  this.nTotalRecord=this.CashBankRecord.length;
     
  this.ngxService.stop();      
   
  });
}

removeZeros(input:string):string{
  return input.replace(/^0+/, '');

}

}
