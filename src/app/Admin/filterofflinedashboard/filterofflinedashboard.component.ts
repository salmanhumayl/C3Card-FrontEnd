import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-filterofflinedashboard',
  templateUrl: './filterofflinedashboard.component.html',
  styleUrls: ['./filterofflinedashboard.component.css']
})
export class FilterofflinedashboardComponent {

  filterDates:any;
  selectedValue:string;
constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private router:Router, public msg:MessengerService){}
   ngOnInit(): void {
  
     this.ShowDashboard();
  

}

  ShowDashboard(){

    this.ngxService.start();
     this.AJESservice.OfflineDashboard().subscribe((data) => {
     this.filterDates = data;
      this.ngxService.stop();
    
  
    }
    );
   }

    onSubmitlogin(form:NgForm){
    //alert(this.selectedValue);

    //const filterOn=new Date(this.selectedValue).toISOString().split('T')[0];
    //alert(filterOn);
    this.router.navigate(['/offlinedashboard',this.selectedValue])
    
    
   }
  
}
