import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PendingBatches } from '../Model/PendingBatches';
import { loginmodel } from '../Model/loginmodel';

import { LogDetails } from 'src/app/Model/LogDetails';
import { UpDateStatus } from '../Model/UpDateStatus';




//import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

  

export class AJESService {
 
 


  private domain :string | undefined;

 // headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
//};

 // headers = new HttpHeaders().set('Access-Control-Allow-Origin', '**');
  constructor(private _http:HttpClient)
     {
    this.domain="http://ajes-webapp2.ajes.ae:4223/";
      
  //this.domain="https://localhost:7053/";
     }
    

  PostDiscussion(formData:FormData):Observable<string>{


 // let token=this.authService.getToken();
 // let headers=new HttpHeaders().set("Authorization","bearer " + token)
    
       
     // return this._http.post<string>(this.domain + "api/OutGoing/AddDocument",formData,{headers:headers})   
     return this._http.post<string>(this.domain + "api/OutGoing/AddDocument",formData)   
     .pipe(
      catchError(this.handleError)
    
    );
  
  
}

 EditPostDiscussion(formData:FormData,id:number):Observable<string>{
 // let token=this.authService.getToken();
  //let headers=new HttpHeaders().set("Authorization","bearer " + token)
 
  return this._http.put<string>(this.domain + "api/OutGoing/UpdateDocument",formData) 
  .pipe(
    catchError(this.handleError)
  
  );
  
}



private handleError(errorResponse:HttpErrorResponse){
  return throwError(errorResponse.message);

}



GetMasterFile():Observable<any[]>{

   

  return this._http.get<any[]>(this.domain + "api/AJESData/GetMasterFile");
  
}

Filter(status:number):Observable<any[]>{

   

  return this._http.get<any[]>(this.domain + "api/AJESData/FilterStatus?Status=" + status);
  
}

UnMatchedEmiratedID():Observable<any[]>{

  return this._http.get<any[]>(this.domain + "api/AJESData/UnMatchedEmiratedID/" + "8069")
  
}




GetAJESCash():Observable<any[]>{

   

  return this._http.get<any[]>(this.domain + "api/AJESData/GetAJESCash");
  
}

GetCashBankFile():Observable<any[]>{

   

  return this._http.get<any[]>(this.domain + "api/AJESData/GetCashBankFile");
  
}


GetCancellation():Observable<any[]>{
  return this._http.get<any[]>(this.domain + "api/AJESData/GetCancellation");
}


GetAtmCard():Observable<any[]>{

   

  return this._http.get<any[]>(this.domain + "api/AJESData/GetAtmCardFile");
  
}


ListOfBatches():Observable<any[]>{
  return this._http.get<any[]>(this.domain + "api/AJESData/ListBatches");
}

ListOfBatchesHistory():Observable<any[]>{
  return this._http.get<any[]>(this.domain + "api/AJESData/HistoryListBatches");
}
BatchDetail(BatchNo:string):Observable<any[]>{
  return this._http.get<any[]>(this.domain + "api/AJESData/BatchesDetail?BatchNo=" +BatchNo);
}
RejectedBatchItems(BatchNo:string):Observable<any[]>{
  return this._http.get<any[]>(this.domain + "api/AJESData/RejectedBatchItems?BatchNo=" +BatchNo);
}






PendingCardAccountNo():Observable<any[]>{

  return this._http.get<any[]>(this.domain + "api/AJESData/PendingCardAccountNo");
}


AccountCardDetail(BatchNo:string):Observable<PendingBatches[]>{
 
  return this._http.get<PendingBatches[]>(this.domain + "api/AJESData/AccountCardDetail?BatchNo="+ BatchNo);
}

UpdateCardAccountStatus(CardList:PendingBatches[]):Observable<string>{
 
  const headers = {
    'Content-Type':'application/json'};

  return this._http.post<string>(this.domain + "api/AJESData/UpdateCardAccountStatus",CardList,{headers});
}




PendingCardsReceving():Observable<any[]>{
  
  return this._http.get<any[]>(this.domain + "api/AJESData/PendingCardReceiving");
}

PendingCardsActivation():Observable<any[]>{
  return this._http.get<any[]>(this.domain + "api/AJESData/PendingCardsActivation");
}



CardDetail(BatchNo:string):Observable<PendingBatches[]>{
 
  return this._http.get<PendingBatches[]>(this.domain + "api/AJESData/CardDetail?BatchNo="+ BatchNo);
}

CardActivationProcess(BatchNo:string):Observable<PendingBatches[]>{
 
  return this._http.get<PendingBatches[]>(this.domain + "api/AJESData/CardActivationProcess?BatchNo="+ BatchNo);
}



ExchangeexportToExcel(BatchNo:string):Observable<any[]>{
  return this._http.get<any[]>(this.domain + "api/AJESData/ATMCardRequestToExchange?BatchNo=" + BatchNo);
}

CardProcess(BatchNo:string,ProjectCode:string):Observable<string>{
  return this._http.get<string>(this.domain + "api/AJESData/CardApplied?BatchNo=" + BatchNo + "&ProjectCode=" + ProjectCode);
}

RevertFullBatch(BatchNo:string,ProjectCode:string):Observable<string>{
  return this._http.get<string>(this.domain + "api/AJESData/RevertFullBatch/" + BatchNo + "/" + ProjectCode );
}





UpdateCardReceivingStatus(CardList:PendingBatches[]):Observable<string>{
 
  const headers = {
    'Content-Type':'application/json'};

  return this._http.post<string>(this.domain + "api/AJESData/UpdateCardReceivingStatus",CardList,{headers});
}


UpdateCardActivation(CardList:PendingBatches[]):Observable<string>{
 
  const headers = {
    'Content-Type':'application/json'};
  //return this._http.put<string>(this.domain + "api/AJESData/UpdateCardReceivingStatus?EmpCode=" + empCode +"&Action=" + Action);
  return this._http.post<string>(this.domain + "api/AJESData/UpdateCardActivation",CardList,{headers});
}




generateBatch(ProjectCode:string):Observable<any>{
  
  return this._http.get<any>(this.domain + "api/AJESData/GenerateBatch?ProjectCode=" + ProjectCode);
  
}




UpdateBatchAccountNoDate(BatchNo:string,rDate:string):Observable<any>{
  
  return this._http.get<any>(this.domain + "api/Batch/UpdateBatchAccountNoDate?BatchNo=" + BatchNo +"&ReceivedOn="+rDate);
  
}


UpdateBatchReceivedDate(BatchNo:string,rDate:string):Observable<any>{
  
  return this._http.get<any>(this.domain + "api/Batch/UpdateBatchReceivedDate?BatchNo=" + BatchNo +"&ReceivedOn="+rDate);
  
}


MarkAsBank(EmpCode:string,Status:number,eformId:number,projectCode:string):Observable<string>{
  

  return this._http.get<string>(this.domain + "api/AJESData/MarkAsBank?EmpCode=" + EmpCode +"&Status=" + Status +"&eFORMID=" +eformId +"&projectCode=" + projectCode);
  
}


Login (model :loginmodel) :Observable<any> {
 // alert(JSON.stringify(model));
  return this._http.post<any>(this.domain + "api/Authenticate/login",model)

}


BatchRevert (model :UpDateStatus) :Observable<any> {
 // alert(JSON.stringify(model));
 // const headers1 =new HttpHeaders(); 
 //   headers1.append('Content-Type','application/json');
  return this._http.post<any>(this.domain + "api/AJESData/BatchRevert",model)

}

DownloadATMCardRequest(BatchNo:string){
  return this._http.get(this.domain + "api/AJESData/DownloadATMCardRequest?BatchNo=" + BatchNo,{observe:'response',responseType:'blob'});
  
}




DailySummary(DatEnd:boolean):Observable<any>{
  return this._http.get<any>(this.domain + "api/Batch/ShowSummary?DatEnd=" + DatEnd);   //querystring 
  
}


OfflineDashboard():Observable<any>{

  return this._http.get<any>(this.domain + "api/Batch/OfflineDashboard" ); //Route Parameter 
  
}
ProcessOfflineDashboard(filterDate:string):Observable<any>{
  return this._http.get<any>(this.domain + "api/Batch/ProcessOfflineDashboard/" + filterDate ); //Route Parameter 
  
}

ShowListing(lstType:string,pramvaluedEnd:string):Observable<any>{

  return this._http.get<any>(this.domain + "api/Batch/Listing/" + lstType + "/" + pramvaluedEnd ); //Route Parameter 
  
}



}




//getrefno():Observable<number>{
   
  //return this._http.get<number>("https://localhost:44363/BlottterMaster/getRefNO");
//}

    //const httpoption={
  //    headers:new HttpHeaders({'Content-Type' :'application/json'})
  //  }