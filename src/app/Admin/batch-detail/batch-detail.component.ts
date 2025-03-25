import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-batch-detail',
  templateUrl: './batch-detail.component.html',
  styleUrls: ['./batch-detail.component.css']
})
export class BatchDetailComponent implements OnInit {
  
  Data:any[] ;
  BatchNo:any;
   

   constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute,public msg:MessengerService){}
     
    ngOnInit(): void {
        this.route.paramMap.subscribe(param=>{
        this.BatchNo=param.get('BatchNo');
        
        this.BatcheDetail();
      });
  }

  BatcheDetail(){
    this.ngxService.start();
    this.AJESservice.BatchDetail(this.BatchNo).subscribe((data)=>  {
      this.Data=data;
     // console.log(this.Data);
      this.ngxService.stop();
    });

  }

}
