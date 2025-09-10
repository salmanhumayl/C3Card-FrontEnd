import { Component, Input } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-card-movement',
  templateUrl: './card-movement.component.html',
  styleUrls: ['./card-movement.component.css']
})
export class CardMovementComponent {
 isloading:boolean=false;

@Input()
BatchNo:string;




bMovement:any;
  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService){}
     
    ngOnInit(): void {
  
      this.BatchMovement();
  }
  BatchMovement(){
    this.ngxService.start();
    this.AJESservice.BatchesMovement(this.BatchNo).subscribe((data)=>  {

      this.bMovement=data;
    
      this.isloading=true;
      this.ngxService.stop();
    });
  }

}
