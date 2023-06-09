import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './_modules/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './_modules/angular-material.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from './authentication/authentication.module';
import { BookingDetailsComponent } from './booking/booking-details/booking-details.component';
import { SubscriptionListComponent } from './subscription/subscription/subscription-list/subscription-list.component';
import { AddSubscriptionComponent } from './subscription/subscription/add-subscription/add-subscription.component';
import { AddCoupanComponent } from './subscription/addons/add-coupan/add-coupan.component';
import { CreateOrderComponent } from './order-detail/create-order/create-order.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION,PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';

import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    BookingDetailsComponent,
    SubscriptionListComponent,
    AddSubscriptionComponent,
    AddCoupanComponent,
    CreateOrderComponent,

    ],
  imports: [
    CommonModule,
    AuthenticationModule,
    FormsModule,
		ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,
    ProgressBarModule,
    NgxUiLoaderModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
