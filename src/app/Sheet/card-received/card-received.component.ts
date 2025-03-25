import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';

declare var $: any;

@Component({
  selector: 'app-card-received',
  templateUrl: './card-received.component.html',
  styleUrls: ['./card-received.component.css']
})
export class CardReceivedComponent implements OnInit {

  Cards:any[] ;
  showModal:boolean=false;
  BatchNo:string;
  brDate:Date;

  datePickerConfig:Partial<BsDatepickerConfig>
  //currentrDate=new Date();
   //RDate=formatDate(this.currentrDate,'dd/MM/yyyy','en-US');

   constructor(private AJESservice:AJESService,private modelService:BsModalService,
               private ngxService:NgxUiLoaderService,private router:Router,public msg:MessengerService){


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
  
    this.PendingCardsReceving();
  

    // $(
      // function() {
      //     $("#receivedDate").datepicker( {dateFormat : "dd/mm/yy"});
     //  }
   
 // );    
}


// onChangeEvent(e:any):void{
//   alert(1);
//   alert(e.target.value);
// }


PendingCardsReceving(){
  this.ngxService.start();
  this.AJESservice.PendingCardsReceving().subscribe((data)=>  {

    this.Cards=data;
  //console.log(this.Cards);

 
    this.ngxService.stop();
  });
}


CardDetail(BatchNo:string){
 
  this.router.navigate(['viewcard',BatchNo])
}


CardReceivedOn(BatchNo:string)
{
  this.BatchNo=BatchNo;
  //  this.UpdateModel.EmpCode=EmpCode;
 
    this.showModal = true;  

}
hide()
{
    this.showModal = false;
}

update(){
//alert(this.brDate);
//alert(new Date(this.brDate.setDate(this.brDate.getDate()+1)).toUTCString());

  this.ngxService.start();
  this.AJESservice.UpdateBatchReceivedDate(this.BatchNo,new Date(this.brDate).toUTCString()).subscribe((data)=>  {

    
    this.ngxService.stop();
    this.hide();
    this.PendingCardsReceving();
  });
}

}
