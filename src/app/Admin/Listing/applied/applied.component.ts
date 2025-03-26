import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent implements OnInit{
  pramvalue:any;
  pramvaluedEnd:any
  Detail:any[];
  Heading:string;
  HCount:number;

  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute,public msg:MessengerService){}
  
  ngOnInit(): void {
    
     this.route.paramMap.subscribe(param=>{
      this.pramvalue=param.get('lstType');
      this.pramvaluedEnd=param.get('dEnd');
      

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
      this.ShowListing();

     });

}

ShowListing(){
  this.ngxService.start();
  this.AJESservice.ShowListing( this.pramvalue,this.pramvaluedEnd).subscribe((data)=>  {

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