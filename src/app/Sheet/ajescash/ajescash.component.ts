import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-ajescash',
  templateUrl: './ajescash.component.html',
  styleUrls: ['./ajescash.component.css']
})
export class AJESCashComponent implements OnInit{

  CashBankRecord:any[] | undefined;
  nTotalRecord:number;

   constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,public msg:MessengerService){}
     
  ngOnInit(): void {
 
    this.GetAJESCash();
 
}

GetAJESCash(){
  this.ngxService.start();
  this.AJESservice.GetAJESCash().subscribe((data)=>  {
  this.CashBankRecord=data;
  this.nTotalRecord=this.CashBankRecord.length;
   
  this.ngxService.stop();      
   
  });
}

removeZeros(input:string):string{
  return input.replace(/^0+/, '');

}
}


