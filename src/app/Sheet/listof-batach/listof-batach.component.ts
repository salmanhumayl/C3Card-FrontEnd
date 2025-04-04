import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as XLSX from 'xlsx';

import { AJESService } from 'src/app/service/app.service';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-listof-batach',
  templateUrl: './listof-batach.component.html',
  styleUrls: ['./listof-batach.component.css']
})
export class ListofBatachComponent {

  
   Batches:any[] ;
   ATMExchange:any[];
   

   constructor(private AJESservice:AJESService,private modelService:BsModalService,private ngxService:NgxUiLoaderService,
    private router:Router,public msg:MessengerService
   ){}
     
    ngOnInit(): void {
  
      this.ListOfBatches();
  }

  ListOfBatches(){
    this.ngxService.start();
    this.AJESservice.ListOfBatches().subscribe((data)=>  {

      this.Batches=data;
     
      this.ngxService.stop();
    });
  }

  exportToExcel(BatchNo:string){
   

    this.AJESservice.ExchangeexportToExcel(BatchNo).subscribe((data)=>  {

      this.ATMExchange=data;
      const ws=XLSX.utils.json_to_sheet(this.ATMExchange);
      const wb=XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb,ws,"Placeholder");
      XLSX.writeFile(wb,'ATM Card Request To Exchange.xls');
  
     
    });

   
  }

  downloadC3CardRequet(Batchno:string)
  {
    
    this.ngxService.start();
    this.AJESservice.DownloadATMCardRequest(Batchno).subscribe((data)=>  {
    //let blob:Blob=data.body as Blob;
    //let url=window.URL.createObjectURL(blob);
      

    let blob:Blob=data.body as Blob;
    let url=window.URL.createObjectURL(blob);
    let a=document.createElement('a');
    a.href=url;
    a.download= Batchno + ' C3 ATM Cards.xlsx';
    a.click()
    window.URL.revokeObjectURL(url);
    



    window.open(url);  
    this.ngxService.stop();
       
  });

  }
  RevertBatch(BatchNo:string,ProjectCode:string)
  {
   
    const shoulddelete=window.confirm("Are you sure to Revert Batch");
    if (shoulddelete){
    this.ngxService.start();
    this.AJESservice.RevertFullBatch(BatchNo,ProjectCode).subscribe((data)=>  {
     
      var Result=JSON.parse(JSON.stringify(data));
      
      if (Result.message=="Process")
      {
        this.ngxService.stop();
        alert("Revert Successfully");
        this.ListOfBatches();
      }
     
     
    })
    }
  }

  ProcessBatch(BatchNo:string,ProjectCode:string)
  {
   
    const shoulddelete=window.confirm("Are you sure to Applied Card");
    if (shoulddelete){
    this.ngxService.start();
    this.AJESservice.CardProcess(BatchNo,ProjectCode).subscribe((data)=>  {
     
      var Result=JSON.parse(JSON.stringify(data));
      
      if (Result.message=="Process")
      {
        this.ngxService.stop();
        alert("Card Applied");
        this.ListOfBatches();
      }
     
     
    })
    }
  }

  batchdetail(BatchNo:string,ProjectCode:string ){
 
    this.router.navigate(['viewBatchDetail',BatchNo,ProjectCode])
  }
  

}
