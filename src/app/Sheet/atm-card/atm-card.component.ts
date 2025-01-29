import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-atm-card',
  templateUrl: './atm-card.component.html',
  styleUrls: ['./atm-card.component.css']
})
export class AtmCardComponent implements OnInit{
  CashBankRecord:any[] | undefined;
  nTotalRecord:number;

constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService){}
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
