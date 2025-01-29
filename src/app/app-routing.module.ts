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

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'masterfile',component:MasterFileComponent},
  {path:'ajescashATM',component:AJESCashComponent},
  {path:'cashbank',component:CashtoBankComponent},
  {path:'ATMCard',component:AtmCardComponent},
  {path:'cancellation',component:CancellationComponent},
    {path:'lstBatch',component:ListofBatachComponent},
  {path:'lstReceiveCard',component:CardReceivedComponent},
  {path:'lstActivateCard',component:CardActivationComponent},
  {path:'viewcard/:BatchNo',component:CardDetailComponent},
  {path:'viewcardActivation/:BatchNo',component:CardActivationProcessComponent},
  {path:'inquiry',component:InquiryComponent},
  {path:'VBDetail/:BatchNo',component:BatchDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'**',redirectTo:'masterfile',pathMatch:'full'}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
