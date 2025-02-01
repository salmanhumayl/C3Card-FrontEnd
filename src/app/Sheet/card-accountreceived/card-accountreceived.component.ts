import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-card-accountreceived',
  templateUrl: './card-accountreceived.component.html',
  styleUrls: ['./card-accountreceived.component.css']
})
export class CardAccountreceivedComponent implements OnInit {
 Cards:any[] ;
  showModal:boolean=false;
  BatchNo:string;
  brDate:Date;

  datePickerConfig:Partial<BsDatepickerConfig>

    constructor(private AJESservice:AJESService,
                 private ngxService:NgxUiLoaderService,private router:Router){
  
  
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
    
      this.PendingCardAccountNo();
     }

     PendingCardAccountNo(){
      
      this.ngxService.start();
      this.AJESservice.PendingCardAccountNo().subscribe((data)=>  {
    
        this.Cards=data;
       console.log(this.Cards);
        this.ngxService.stop();
      });
    }

    
CardAccDetail(BatchNo:string){
 
  this.router.navigate(['viewAccountNoCard',BatchNo])
}


CardAccountReceivedOn(BatchNo:string)
{
  this.BatchNo=BatchNo;
  //  this.UpdateModel.EmpCode=EmpCode;
 
    this.showModal = true;  

}
}
