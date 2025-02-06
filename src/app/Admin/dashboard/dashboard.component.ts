import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  DailySuumary:any;
  isloading:boolean=false;

  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService){}
   ngOnInit(): void {
  
     this.DailySummary();
  

}


 DailySummary(){

  this.ngxService.start();
   this.AJESservice.DailySummary().subscribe((data) => {

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

  
  this.AJESservice.DailySummary().subscribe(
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


}
