import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ezware',
  templateUrl: './ezware.component.html',
  styleUrls: ['./ezware.component.css']
})

export class EzwareComponent implements OnInit {
 
  MasterRecord:any[] | undefined;
  nTotalRecord:number;

 

    
  constructor(private AJESservice:AJESService,private modelService:BsModalService,
    private ngxService:NgxUiLoaderService, public msg:MessengerService){


    }
   
  ngOnInit(): void {

    this.GetEwareFile();
 
}

  GetEwareFile(){
    this.ngxService.start();
    this.AJESservice.GetEwareFile().subscribe((data)=>  {

      this.MasterRecord=data;
      
      this.nTotalRecord=this.MasterRecord.length;
     
     this.ngxService.stop();
    });
  }

  RefreshData()
  {
    
    this.GetEwareFile();
  }

 



ExportToExcel(){

         let data=document.getElementById("table-data");

         const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(data,{raw:true});

      /**Generate workbook and add the sheet  */
        const wb:XLSX.WorkBook=XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb,ws,"Placeholder");
        XLSX.writeFile(wb,'Ezware.xls');

}

}


