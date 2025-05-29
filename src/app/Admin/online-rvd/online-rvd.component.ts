import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-online-rvd',
  templateUrl: './online-rvd.component.html',
  styleUrls: ['./online-rvd.component.css']
})
export class OnlineRVDComponent {

 
  Detail:any[];
  Heading:string;
  HCount:number;

  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute,public msg:MessengerService){}
     
 ngOnInit(): void {
  this.ShowListing();
 }

    ShowListing(){
    this.ngxService.start();
    this.AJESservice.onlineRVD().subscribe((data)=>  {
  
      this.Detail=data;
      this.HCount=data.length;
      this.ngxService.stop();
    });
  }

    ExportToExcel(){
    
             let data=document.getElementById("table-data");
    
             const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(data,{raw:true});
    
          /**Generate workbook and add the sheet  */
            const wb:XLSX.WorkBook=XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb,ws,"Placeholder");
            XLSX.writeFile(wb,'MasterFile.xls');
    
    }


}
