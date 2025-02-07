import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent implements OnInit{
  pramvalue:any;
  Detail:any[];
  Heading:string;

  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute){}
  
  ngOnInit(): void {
    
     this.route.paramMap.subscribe(param=>{
      this.pramvalue=param.get('lstType');

      if (this.pramvalue=="Applied")
      {
        this.Heading="Account Under Process";
      }
      else if(this.pramvalue=="AccNo"){
        this.Heading="Card Under Process";
      }
      this.ShowListing();

     });

}

ShowListing(){
  this.ngxService.start();
  this.AJESservice.ShowListing( this.pramvalue).subscribe((data)=>  {

    this.Detail=data;
    this.ngxService.stop();
  });
}

}