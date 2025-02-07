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

constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService){}
   ngOnInit(): void {
  
     this.ProcessOfflineDashboard();
  

}


ProcessOfflineDashboard(){

  const filterOn=new Date().toISOString().split('T')[0];
  this.ngxService.start();
   this.AJESservice.ProcessOfflineDashboard(filterOn).subscribe((data) => {

    this.Data = data;
    console.log(this.Data);
    this.ngxService.stop();
  

  }
  );
 }
}
