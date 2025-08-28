import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterFileComponent } from './Sheet/master-file/master-file.component';
import { CashtoBankComponent } from './Sheet/cashto-bank/cashto-bank.component';
import { AtmCardComponent } from './Sheet/atm-card/atm-card.component';
import { ListofBatachComponent } from './Sheet/listof-batach/listof-batach.component';
import { CardReceivedComponent } from './Sheet/card-received/card-received.component';
import { CardDetailComponent } from './Sheet/card-detail/card-detail.component';
import { CardActivationComponent } from './Sheet/card-activation/card-activation.component';
import { AJESCashComponent } from './Sheet/ajescash/ajescash.component';
import { CardActivationProcessComponent } from './Sheet/card-activation-process/card-activation-process.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './logout/logout/logout.component';
import { InquiryComponent } from './Sheet/inquiry/inquiry.component';
import { BatchDetailComponent } from './Admin/batch-detail/batch-detail.component';
import { CancellationComponent } from './Sheet/cancellation/cancellation.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CardAccountreceivedComponent } from './Sheet/card-accountreceived/card-accountreceived.component';
import { CardAccountDetailComponent } from './Sheet/card-account-detail/card-account-detail.component';
import { OfflinedashboardComponent } from './Admin/offlinedashboard/offlinedashboard.component';
import { AppliedComponent } from './Admin/Listing/applied/applied.component';
import { DayEndMessageComponent } from './Admin/day-end-message/day-end-message.component';
import { FilterofflinedashboardComponent } from './Admin/filterofflinedashboard/filterofflinedashboard.component';
import { TotalComponent } from './Admin/total/total.component';
import { PendingBatchesComponent } from './Sheet/pending-batches/pending-batches.component';
import { OnlinelistingComponent } from './Admin/onlinelisting/onlinelisting.component';
import { IsAdminGuard } from './guard/auth.guard.guard';
import { OnlineRVDComponent } from './Admin/online-rvd/online-rvd.component';
import { EzwareComponent } from './Sheet/ezware/ezware.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'masterfile',component:MasterFileComponent,canActivate:[IsAdminGuard]},
  {path:'ajescashATM',component:AJESCashComponent},
  {path:'cashbank',component:CashtoBankComponent},
  {path:'ATMCard',component:AtmCardComponent},
  {path:'cancellation',component:CancellationComponent},
  {path:'lstBatch',component:ListofBatachComponent},
  {path:'lstCardAccNo',component:CardAccountreceivedComponent},
  {path:'viewAccountNoCard/:BatchNo',component:CardAccountDetailComponent},
  {path:'lstReceiveCard',component:CardReceivedComponent},
  {path:'lstActivateCard',component:CardActivationComponent},
  {path:'viewcard/:BatchNo',component:CardDetailComponent},
  {path:'viewcardActivation/:BatchNo',component:CardActivationProcessComponent},
  {path:'inquiry',component:InquiryComponent},
  {path:'VBDetail/:BatchNo',component:BatchDetailComponent},
  {path:'logout',component:LogoutComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[IsAdminGuard]},
  {path:'filteroffdashboard',component:FilterofflinedashboardComponent,canActivate:[IsAdminGuard]},
  {path:'offlinedashboard/:selectedDate',component:OfflinedashboardComponent,canActivate:[IsAdminGuard]},
  {path:'listing/:lstType/:dEnd',component:AppliedComponent},
  {path:'onlinelisting/:lstType',component:OnlinelistingComponent},
  {path:'onlineRVD',component:OnlineRVDComponent},
  {path:'viewBatchDetail/:BatchNo/:projectcode',component:PendingBatchesComponent},
  {path:'lstTotal/:dEnd',component:TotalComponent},
  {path:'DayEnd',component:DayEndMessageComponent},
  {path:'ezware',component:EzwareComponent},
  {path:'**',redirectTo:'login',pathMatch:'full'}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
