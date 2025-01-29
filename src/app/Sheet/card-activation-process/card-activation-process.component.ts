import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PendingBatches } from 'src/app/Model/PendingBatches';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-card-activation-process',
  templateUrl: './card-activation-process.component.html',
  styleUrls: ['./card-activation-process.component.css']
})
export class CardActivationProcessComponent implements OnInit {

   BatchNo:any;
   Detail:PendingBatches[];
   // Detail:any[];
    allSelected=false;


   constructor(private AJESservice:AJESService,private router:Router,private route:ActivatedRoute,private ngxService:NgxUiLoaderService){
   }
    
      ngOnInit(): void {
        this.route.paramMap.subscribe(param=>{
        this.BatchNo=param.get('BatchNo');
        this.getDetail()
        });
      }

      getDetail(){
        this.ngxService.start();
        this.AJESservice.CardActivationProcess(this.BatchNo).subscribe((data)=>  {
          this.Detail=data;
          this.ngxService.stop();
        });
    
      }

      ActivateCards()
      {
    
        
        this.ngxService.start();
        this.AJESservice.UpdateCardActivation(this.Detail).subscribe((data)=>  {
          var Result=JSON.parse(JSON.stringify(data));
          if (Result.message=="Process")
          {
            this.ngxService.stop();
            alert("C3 Card Activated Successfully ");
            this.getDetail();
          }
        });
    
    
      }

      checkAllCheckBox(ev: any) { // Angular 13
    
        this.Detail.forEach(x => x.activationStatus = ev.target.checked)
        console.log(this.Detail);
      }

}
