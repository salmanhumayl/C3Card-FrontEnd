import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-offlinedashboard',
  templateUrl: './offlinedashboard.component.html',
  styleUrls: ['./offlinedashboard.component.css']
})
export class OfflinedashboardComponent implements OnInit {

  Data:any;
  selectedDate:any;
  showDashnoard:boolean=false;
  filterOn:any

constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute){}
   ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      this.selectedDate=param.get('selectedDate');
       this.filterOn=new Date(this.selectedDate).toISOString().split('T')[0];
     this.ProcessOfflineDashboard();
  
    }
    );
  

   }


 ProcessOfflineDashboard(){
  
  //const filterOn=new Date().toISOString().split('T')[0];
  this.ngxService.start();
    this.AJESservice.ProcessOfflineDashboard(this.selectedDate,false).subscribe((data) => {
    this.Data = data;
    this.showDashnoard=true;
    this.ngxService.stop();
  

  }
  );
 }



}
