import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as XLSX from 'xlsx';

import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-listof-batach',
  templateUrl: './listof-batach.component.html',
  styleUrls: ['./listof-batach.component.css']
})
export class ListofBatachComponent {

  
   Batches:any[] ;
   ATMExchange:any[];
   

   constructor(private AJESservice:AJESService,private modelService:BsModalService,private ngxService:NgxUiLoaderService){}
     
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
    let blob:Blob=data.body as Blob;
    let url=window.URL.createObjectURL(blob);
    window.open(url);  
    this.ngxService.stop();
       
  });

  }


  ProcessBatch(BatchNo:string)
  {
   
    const shoulddelete=window.confirm("Are you sure to Applied Card");
    if (shoulddelete){
    this.ngxService.start();
    this.AJESservice.CardProcess(BatchNo).subscribe((data)=>  {
     
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

}
