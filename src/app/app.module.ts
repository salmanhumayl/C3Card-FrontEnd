import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import {ModalModule,BsModalService} from 'ngx-bootstrap/modal';

import { NgxUiLoaderModule,NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { MasterFileComponent } from './Sheet/master-file/master-file.component';
import { TopnavComponent } from './Shared/topnav/topnav/topnav.component';
import { SidebarComponent } from './Shared/sidebar/sidebar/sidebar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CashtoBankComponent } from './Sheet/cashto-bank/cashto-bank.component';
import { AtmCardComponent } from './Sheet/atm-card/atm-card.component';
import { ListofBatachComponent } from './Sheet/listof-batach/listof-batach.component';
import { CardReceivedComponent } from './Sheet/card-received/card-received.component';
import { CardDetailComponent } from './Sheet/card-detail/card-detail.component';
import { CardActivationComponent } from './Sheet/card-activation/card-activation.component';
import { AJESCashComponent } from './Sheet/ajescash/ajescash.component';
import { ConfirmBoxConfigModule, DialogConfigModule, NgxAwesomePopupModule } from '@costlydeveloper/ngx-awesome-popup';
import { CardActivationProcessComponent } from './Sheet/card-activation-process/card-activation-process.component';
import { LoginComponent } from './login/login/login.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LogoutComponent } from './logout/logout/logout.component';
import { InquiryComponent } from './Sheet/inquiry/inquiry.component';
import { BatchDetailComponent } from './Admin/batch-detail/batch-detail.component';
import { RejectedBatchComponent } from './Admin/rejected-batch/rejected-batch.component';
import { CancellationComponent } from './Sheet/cancellation/cancellation.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterFileComponent,
    TopnavComponent,
    SidebarComponent,
    CashtoBankComponent,
    AtmCardComponent,
    ListofBatachComponent,
    CardReceivedComponent,
    CardDetailComponent,
    CardActivationComponent,
    AJESCashComponent,
    CardActivationProcessComponent,
    LoginComponent,
    LogoutComponent,
    InquiryComponent,
    BatchDetailComponent,
    RejectedBatchComponent,
    CancellationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    ModalModule.forRoot(),
    NgxAwesomePopupModule.forRoot(),
    ConfirmBoxConfigModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
      {provide: LocationStrategy,useClass:HashLocationStrategy},
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
