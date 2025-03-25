import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {
  
  CashBankRecord:any[] | undefined;
  nTotalRecord:number;

  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,public msg:MessengerService){}
   
  ngOnInit(): void {
 
    this.GetCancellationFile();
 
}


GetCancellationFile(){
  this.ngxService.start();
  this.AJESservice.GetCancellation().subscribe((data)=>  {
  this.CashBankRecord=data;
  this.nTotalRecord=this.CashBankRecord.length;
   
  this.ngxService.stop();      
   
  });
}

removeZeros(input:string):string{
  return input.replace(/^0+/, '');

}
}
