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
   formateDate:string;

  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute,
    public msg:MessengerService,private modelService:BsModalService,private router:Router){}

   // dailyClosing = [
     // {
       // closingDate: "2025-02-13",
       // toBeApplied: 152,
       // accUnderProcess: 40,
      //  cardunderProcess: 7,
     //   bankCard: 0
     // },
    //  {
      //  closingDate: "2025-02-14",
     //   toBeApplied: 0,
       // accUnderProcess: 0,
       // cardunderProcess: 0,
       // bankCard: 0
     // }
   // ];
  
    // Function to transform JSON to Table format
    getTableData(): any[] {
      let transformedData: any[] = [];
  
      let categories = [
        { key: "toBeApplied", label: "To be Applied" },
        { key: "accUnderProcess", label: "Account Under Process" },
        { key: "cardunderProcess", label: "Card Under Process" },
        { key: "bankCard", label: "Bank Card" },
      ];
  
      categories.forEach(category => {
        let row: any = { particular: category.label };
      
        let total = 0;
  
        this.DailySuumary.ldailyClosing.forEach((day:any) => {
        //  console.log(`Processing ${category.key} for ${day.closingDate}`, day); // Debugging
         row[day.closingDate] = day[category.key];
          
         // total += day[category.key];
        });
  
       //  row["Total"] = total;
        transformedData.push(row);
      });
  
      return transformedData;
    }

    getTableDataTotal(): any[] {
      let transformedDataTotal: any[] = [];
    
      let categoriesTotal = [
        { key: "totalOff", label: "Off-Shore" },
        { key: "totalOn", label: "On-Shore" },
        
      ];
  
      categoriesTotal.forEach(categorytotal => {
        let rowTotal: any = { particular: categorytotal.label };

        let total = 0;
        
        this.DailySuumary.lTotalClosing.forEach((dayTotal:any) => {
        
          rowTotal[dayTotal.closingDate] = dayTotal[categorytotal.key];
          
         // total += day[category.key];
        });
  
       //  row["Total"] = total;
       transformedDataTotal.push(rowTotal);
      });
    
      return transformedDataTotal;
    }
     
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
        this.formateDate=new Date(this.selectedValue).toLocaleDateString();
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
