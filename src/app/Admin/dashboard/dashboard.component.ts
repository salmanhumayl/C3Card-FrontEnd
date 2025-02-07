import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
 
  isloading:boolean=false;
  pramvalue:any;
   // modelRef:BsModalRef; 
   // YourModalComponent:MyModelComponent;

  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute,
    public msg:MessengerService,private modelService:BsModalService){}

   ngOnInit(): void {
  
    this.route.paramMap.subscribe(param=>{
      this.pramvalue=param.get('show');
   
      if (!this.pramvalue==true)
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


 DayEndPrcocessDailySummary(){

  this.ngxService.start();
   this.AJESservice.DailySummary(true).subscribe((data) => {
    var Result=JSON.parse(JSON.stringify(data));
    alert(Result.message);
    this.ngxService.stop();
   
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


//  showYourModal() {
//   const initialState = {
//       parameter: 2019,
//  };
//   this.modelRef = this.modelService.show(MyModelComponent, {initialState});
//     this.modelRef.content.closeBtnName = 'Close';


//     }

}
