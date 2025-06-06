import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent {
 Batches:any[] ;
   ATMExchange:any[];
   

   constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private router:Router,public msg:MessengerService){}
     
    ngOnInit(): void {
  
      this.ListOfBatches();
  }

  
  ListOfBatches(){
    this.ngxService.start();
    this.AJESservice.ListOfBatchesHistory().subscribe((data)=>  {

      this.Batches=data;
   
      this.ngxService.stop();
    });
  }

  ShowBatchDetail(BatchNo:string){
    this.router.navigate(['VBDetail',BatchNo])

  }

  downloadC3CardRequet(Batchno:string)
  {
    
    this.ngxService.start();
    this.AJESservice.DownloadATMCardRequestInquiry(Batchno).subscribe((data)=>  {
    let blob:Blob=data.body as Blob;
    let url=window.URL.createObjectURL(blob);
    let a=document.createElement('a');
    a.href=url;
    a.download= Batchno + ' C3 ATM Cards.xlsx';
    a.click()
    window.URL.revokeObjectURL(url);
    
  
    //window.open(url);  
    this.ngxService.stop();
       
  });

  }
}

// const a = document.createElement('a');
//     const url = window.URL.createObjectURL(blob);
//     a.href = url;
//     a.download = 'correct-filename.pdf';
//     a.click();
//     window.URL.revokeObjectURL(url);