import { Component, OnInit, TemplateRef } from '@angular/core';
import { AJESService } from 'src/app/service/app.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AppearanceAnimation, ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';
import { tap } from 'rxjs';
import * as XLSX from 'xlsx';
import { MessengerService } from 'src/app/service/messenger.service';


import { LogDetails } from 'src/app/Model/LogDetails';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-master-file',
  templateUrl: './master-file.component.html',
  styleUrls: ['./master-file.component.css']
})
export class MasterFileComponent implements OnInit {

  MasterRecord:any[] | undefined;
  batchGenerate:String;
  modelRef:BsModalRef; 
  nTotalRecord:number;

  content:string ;
  title:string;
  RemindarRemarks:string;
  showModal:boolean;
  isPopupVisible:boolean=false;
  UserLogModel:LogDetails=new LogDetails();


    
  constructor(private AJESservice:AJESService,private modelService:BsModalService,
    private ngxService:NgxUiLoaderService, public msg:MessengerService,private toastrService:ToastrService){


    }
   
  ngOnInit(): void {

    this.GetMasterFile();
 
}

  GetMasterFile(){
    this.ngxService.start();
    this.AJESservice.GetMasterFile().subscribe((data)=>  {

      this.MasterRecord=data;
      
      this.nTotalRecord=this.MasterRecord.length;
     
     this.ngxService.stop();
    });
  }

  RefreshData()
  {
    
    this.GetMasterFile();
  }

  Filter(status:number)
  {
    
    this.ngxService.start();
    this.AJESservice.Filter(status).subscribe((data)=>  {

      this.MasterRecord=data;
      this.nTotalRecord=this.MasterRecord.length;
      this.ngxService.stop();
     
    });
    }

    UnMatchedEmiratedID()
    {
      
      this.ngxService.start();
      this.AJESservice.UnMatchedEmiratedID().subscribe((data)=>  {
  
        this.MasterRecord=data;
        this.nTotalRecord=this.MasterRecord.length;
        this.ngxService.stop();
       
      });
      }

    generateBatch(projectCode:string)
    {
    
    
      // const shoulddelete=window.confirm("Are you sure to generate Batch");
          //if (shoulddelete){}


          const newConfirmBox = new ConfirmBoxInitializer();

        newConfirmBox.setTitle('Confirm Batch Generation');
        newConfirmBox.setMessage('Are you Sure to Generate Batch');

        // Choose layout color type
        newConfirmBox.setConfig({
        layoutType: DialogLayoutDisplay.INFO, // SUCCESS | INFO | NONE | DANGER | WARNING
        animationIn: AppearanceAnimation.BOUNCE_IN, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
        animationOut: DisappearanceAnimation.BOUNCE_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
        buttonPosition: 'right', // optional 
        });

        newConfirmBox.setButtonLabels('Yes', 'No');

        // Simply open the popup and observe button click
        newConfirmBox.openConfirmBox$()
        .pipe(
           tap(value =>{
            if (value.success){
              this.ngxService.start();
             
            
              this.AJESservice.generateBatch(projectCode).subscribe((data)=>  {
              
                var Result=JSON.parse(JSON.stringify(data));
                
                if (Result.message=="Generated")
                {
                  this.ngxService.stop();
                  alert("Batch Generated!! Successfully");
                //  this.toastrService.success("Batch Generated!! Successfully");
                  this.RefreshData();
                }
                else{
                  this.ngxService.stop();
                 // this.toastrService.success("Not Record Found during Batch Generation!!!!!");
                  alert("Not Record Found during Batch Generation!!!!!");
                  this.RefreshData();

                }
              })
            }
           }

           ) 
        )   
        .subscribe();
     
      }

      MarkAsBank(empCode:string,Status:number,eformId:number,projectCode:string)
      {
          const shoulddelete=window.confirm("Are you sure to Continue");
          if (shoulddelete){
          this.ngxService.start();
          this.AJESservice.MarkAsBank(empCode,Status,eformId,projectCode).subscribe((data)=>  {
          
            var Result=JSON.parse(JSON.stringify(data));
            
            if (Result.message=="Process")
            {
              this.ngxService.stop();
              if (Status==5){
                alert("Move to Bank File Successfully");
              }else if (Status==100) {
                alert("Move Cancelled Successfully");
              }
              else{
                alert("Revert Successfully");
              }
              this.RefreshData();
            }
            else{
              alert("Something went wrong" + Result.message);
            }
          
          })
        }
      }

  removeZeros(input:string):string{
      return input.replace(/^0+/, '');
   
  }

 public openModel(template :TemplateRef<any>)
 {
 
  this.modelRef=this.modelService.show(template);

 }

 
 showRemindar()
 {
     alert(1);
     this.content = "Are you sure ? you want to send reminder.!!"; // Dynamic Data
     this.title = "REMINDAR!!";    // Dynamic Data
     
     this.showModal = true;  
 
     
         
 
 }
 //Bootstrap Modal Close event
  hide()
 {
     this.RemindarRemarks="";
     this.showModal = false;
 }

 showPopup() {
  this.isPopupVisible = true;
}

closePopup() {
  this.isPopupVisible = false;
}

ExportToExcel(){

         let data=document.getElementById("table-data");

         const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(data,{raw:true});

      /**Generate workbook and add the sheet  */
        const wb:XLSX.WorkBook=XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb,ws,"Placeholder");
        XLSX.writeFile(wb,'MasterFile.xls');

}

}

