import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  pramvaluedEnd:any
  Detail:any[];
  
  HCount:number;

   constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute){}
    
     
     ngOnInit(): void {
       
        this.route.paramMap.subscribe(param=>{
         this.pramvaluedEnd=param.get('dEnd');
         
   
     
         this.ShowListing();
   
        });
   
   }
   
   ShowListing(){
     this.ngxService.start();
     this.AJESservice.ShowListingTotal(this.pramvaluedEnd).subscribe((data)=>  {
   
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
