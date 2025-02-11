import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';
//import { MyModelComponent } from '../Listing/my-model/my-model.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()
  DailySuumary:any;
  showModal:boolean=false;
  DayEndPwd:string;
 
  @Input()
  selectedValue:string;

  isloading:boolean=false;
  pramvalue:any;
   // modelRef:BsModalRef; 
   // YourModalComponent:MyModelComponent;

  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute,
    public msg:MessengerService,private modelService:BsModalService,private router:Router){}

     
   ngOnInit(): void {
  
    this.route.paramMap.subscribe(param=>{
      this.pramvalue=param.get('show');
   
      if (this.selectedValue==undefined  )
      {
      
         this.DailySummary();
  
      }
      else{
        this.ngxService.start();
        this.isloading=true
        this.ngxService.stop();
      }
      
    });
    

}


 DailySummary(){

  this.ngxService.start();
   this.AJESservice.DailySummary(false).subscribe((data) => {

    this.DailySuumary = data;
    this.ngxService.stop();
    this.isloading = true;
  
  }
  );
 }




 Refresh(){
  this.DailySummary();
 }

DailySummarynext(){

  
  this.AJESservice.DailySummary(true).subscribe(
      {

        next:(data)=>{
        
          this.DailySuumary=data;
           this.ngxService.stop()
            
    },
    complete:()=>{
      this.ngxService.stop()
      this.isloading=true;
     ;      
    }
  
  });
 }



 InitiateDayEnd()
{
  
    this.showModal = true;  

}
hide()
{
    this.showModal = false;
}

StartDayEndProcess()
{

   if (this.DayEndPwd=="AJES1234"){
    this.ngxService.start();
    this.AJESservice.DailySummary(true).subscribe((data) => {
     this.ngxService.stop();
     this.router.navigate(['DayEnd']);
     
   
   }
   );
    
   }

}
//  showYourModal() {
//   const initialState = {
//       parameter: 2019,
//  };
//   this.modelRef = this.modelService.show(MyModelComponent, {initialState});
//     this.modelRef.content.closeBtnName = 'Close';


//     }

}
