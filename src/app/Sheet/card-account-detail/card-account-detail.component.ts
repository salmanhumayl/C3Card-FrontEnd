import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
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
  brDate:Date;
  
  lItemSelected:boolean=false;

    datePickerConfig:Partial<BsDatepickerConfig>
  

   constructor(private AJESservice:AJESService,private route:ActivatedRoute,private ngxService:NgxUiLoaderService){
  
    this.datePickerConfig=Object.assign({},
      {
        todayHighlight: true,
        containerClass:'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat:'DD/MM/YYYY',
        customTodayClass:'custom-today-class'
       
        
      });
  
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
    
    this.Detail.forEach(item =>
      {
        if (item.accNoStatus==true && this.brDate!=undefined){
          item.accNoReceivedOn=new Date(this.brDate);
           this.lItemSelected=true;
        }
      });

    if (!this.lItemSelected){
      alert("Both Date and Employee must be selected for processing!..");
      return;
    }
    this.ngxService.start();
    
     this.AJESservice.UpdateCardAccountStatus(this.Detail).subscribe((data)=>  {
      var Result=JSON.parse(JSON.stringify(data));
      if (Result.message=="Process")
      {
        this.ngxService.stop();
        alert("C3 Card Acc No Received Successfully ");
        this.getDetail();
       
        this.lItemSelected=false;
      }
    
    });


  }

    checkAllCheckBox(ev: any) { // Angular 13
    
      this.Detail.forEach(x => x.accNoStatus = ev.target.checked)
     
    }

      Revert(EmpCode:string,ProjectCode:string)
      {
        
          this.UpdateModel.EmpCode=EmpCode;
          this.UpdateModel.projectCode=ProjectCode;
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
