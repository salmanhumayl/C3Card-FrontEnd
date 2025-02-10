import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-offlinedashboard',
  templateUrl: './offlinedashboard.component.html',
  styleUrls: ['./offlinedashboard.component.css']
})
export class OfflinedashboardComponent implements OnInit {

  Data:any;
  filterDates:any;
  selectedValue:string;
  showDashnoard:boolean=false;

constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService){}
   ngOnInit(): void {
  
     this.ShowDashboard();
  

}


ShowDashboard(){

  this.ngxService.start();
   this.AJESservice.OfflineDashboard().subscribe((data) => {
     this.filterDates = data;
     console.log(this.filterDates);
     this.ngxService.stop();
  

  }
  );
 }

 ProcessOfflineDashboard(){
  
  //const filterOn=new Date().toISOString().split('T')[0];
  this.ngxService.start();
   this.AJESservice.ProcessOfflineDashboard(this.selectedValue).subscribe((data) => {
    //var Result=JSON.parse(JSON.stringify(data));
    this.Data = data;
    this.showDashnoard=true;
    this.ngxService.stop();
  

  }
  );
 }



}
