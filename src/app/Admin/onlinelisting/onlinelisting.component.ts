import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { AJESService } from 'src/app/service/app.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-onlinelisting',
  templateUrl: './onlinelisting.component.html',
  styleUrls: ['./onlinelisting.component.css']
})
export class OnlinelistingComponent {

  pramvalue:any;

  Detail:any[];
  Heading:string;
  HCount:number;

   constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute){}
    
    ngOnInit(): void {
      
       this.route.paramMap.subscribe(param=>{
        this.pramvalue=param.get('lstType');
  
        if (this.pramvalue=="Applied")
          {
            this.Heading="Account Under Process";
          }
          else if(this.pramvalue=="AccNo"){
            this.Heading="Card Under Process";
          }
          else if(this.pramvalue=="EMTOApp"){
            this.Heading="Emirates ID To be Applied";
          }
          else if(this.pramvalue=="EMID"){
            this.Heading="Emirates ID Issued";
          }
          else if(this.pramvalue=="Cash"){
            this.Heading="Cash Salary Count(Ezware Emp Master)";
          }
          else if(this.pramvalue=="BCard"){
            this.Heading="Bank Salary Count(Ezware Emp Master)";
          }
          else if(this.pramvalue=="RVD"){
            this.Heading="Card Received";
          }
    
          else if(this.pramvalue=="ACT"){
            this.Heading="Card Activated";
          }
          
            else if(this.pramvalue=="Total"){
              this.Heading="Total";  
          }
        
  
        
        this.ShowListing();
  
       });
  
  }

  ShowListing(){
    this.ngxService.start();
    this.AJESservice.OnlineListing( this.pramvalue).subscribe((data)=>  {
  
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
