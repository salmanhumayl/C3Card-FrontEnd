
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';


@Component({
  selector: 'app-cashto-bank',
  templateUrl: './cashto-bank.component.html',
  styleUrls: ['./cashto-bank.component.css']
})
export class CashtoBankComponent implements OnInit{
  CashBankRecord:any[] | undefined;
  nTotalRecord:number;

  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService){}
   
  ngOnInit(): void {
 
    this.GetCashBankFile();
 
}

GetCashBankFile(){
    this.ngxService.start();
    this.AJESservice.GetCashBankFile().subscribe((data)=>  {
    this.CashBankRecord=data;
    this.nTotalRecord=this.CashBankRecord.length;
     
    this.ngxService.stop();      
     
    });
  }

  removeZeros(input:string):string{
    return input.replace(/^0+/, '');
 
}

}
