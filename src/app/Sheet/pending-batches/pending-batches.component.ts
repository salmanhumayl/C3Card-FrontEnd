import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-pending-batches',
  templateUrl: './pending-batches.component.html',
  styleUrls: ['./pending-batches.component.css']
})
export class PendingBatchesComponent {
  Cards:any[] ;
  BatchNo:any;
  ProjectCode:any;
     constructor(private AJESservice:AJESService,private modelService:BsModalService,
                 private ngxService:NgxUiLoaderService,private route:ActivatedRoute)
                 {}

    
        ngOnInit(): void {
          this.route.paramMap.subscribe(param=>{
          this.BatchNo=param.get('BatchNo');
          this.ProjectCode=param.get('ProjectCode');  
          this.PendingBatches();
    
    });
  }

    PendingBatches(){
      this.ngxService.start();
      this.AJESservice.PendingBatches(this.BatchNo,this.ProjectCode).subscribe((data)=>  {
        this.Cards=data;
        this.ngxService.stop();
      });
    }
      
    checkAllCheckBox(ev: any) { // Angular 13
    
      this.Cards.forEach(x => x.selectEmployee = ev.target.checked)
     
    }

    RevertEmployee()
  {


     this.ngxService.start();
    
     this.AJESservice.RevertEmployeeBatch(this.Cards).subscribe((data)=>  {
      var Result=JSON.parse(JSON.stringify(data));
      if (Result.message=="Process")
      {
        this.ngxService.stop();
        alert("Employee Revert From Batch Successfully");
        this.PendingBatches();
      }
    
    });


  }


}
