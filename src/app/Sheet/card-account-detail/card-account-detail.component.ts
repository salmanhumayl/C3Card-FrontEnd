import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PendingBatches } from 'src/app/Model/PendingBatches';
import { UpDateStatus } from 'src/app/Model/UpDateStatus';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-card-account-detail',
  templateUrl: './card-account-detail.component.html',
  styleUrls: ['./card-account-detail.component.css']
})
export class CardAccountDetailComponent implements OnInit {
 BatchNo:any;
  Detail:PendingBatches[];
 
  allSelected=false;
  showModal:boolean=false;
  UpdateModel:UpDateStatus=new UpDateStatus();
   constructor(private AJESservice:AJESService,private route:ActivatedRoute,private ngxService:NgxUiLoaderService){
  
      
  
    }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(param=>{
      this.BatchNo=param.get('BatchNo');
      this.getDetail()
      });
    }

    getDetail(){
      this.ngxService.start();
      this.AJESservice.AccountCardDetail(this.BatchNo).subscribe((data)=>  {
    
        this.Detail=data;
     //  console.log(this.Detail);
       
        this.ngxService.stop();
      });
  
    }


    ReceviedAccountNoCards()
  {

    
     this.ngxService.start();
    
     this.AJESservice.UpdateCardAccountStatus(this.Detail).subscribe((data)=>  {
      var Result=JSON.parse(JSON.stringify(data));
      if (Result.message=="Process")
      {
        this.ngxService.stop();
        alert("C3 Card Acc No Received Successfully ");
        this.getDetail();
      }
    
    });


  }

    checkAllCheckBox(ev: any) { // Angular 13
    
      this.Detail.forEach(x => x.accNoStatus = ev.target.checked)
     
    }

      Revert(EmpCode:string)
      {
        
          this.UpdateModel.EmpCode=EmpCode;
          this.showModal = true;  
      
          
              
      
      }
      //Bootstrap Modal Close event
       hide()
      {
       //   this.RemindarRemarks="";
          this.showModal = false;
      }
    onSubmitlogin(form:NgForm)
      {
        if ( this.UpdateModel.Status==99)
         return;
         this.UpdateModel.BatchNo=this.BatchNo;
          
          this.ngxService.start();
         this.AJESservice.BatchRevert(this.UpdateModel).subscribe((data)=>  {
          var Result=JSON.parse(JSON.stringify(data));
          if (Result.message=="Process")
          {
            this.ngxService.stop();
            alert("Processed");
            this.showModal = false;
            this.getDetail();
          }
        
        });
        
      }
    
}
