import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-rejected-batch',
  templateUrl: './rejected-batch.component.html',
  styleUrls: ['./rejected-batch.component.css']
})
export class RejectedBatchComponent implements OnInit {
  Data:any[] ;
  
  @Input()
  BatchNo:string;

     constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService){}
       
     ngOnInit(): void {
      
      this.RejectedBatcheItems();
    
    }

    RejectedBatcheItems(){
      this.ngxService.start();
      this.AJESservice.RejectedBatchItems(this.BatchNo).subscribe((data)=>  {
        this.Data=data;
        console.log(this.Data);
        this.ngxService.stop();
      });
  
    }
}
