import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DataDemoComponent } from './demo/data-demo/data-demo.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FormDemoComponent } from './demo/form-demo/form-demo.component';
import { SearchListComponent } from './demo/search-list/search-list.component';

import { CartService } from './cart.service';
import { LifecycleComponent } from './demo/lifecycle/lifecycle.component';
import { FormFunctionComponent } from './demo/form-function/form-function.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'demo', component: DataDemoComponent },
      { path: 'form', component: FormDemoComponent },
      { path: 'search', component: SearchListComponent },
      { path: 'lifecycle', component: LifecycleComponent },
      { path: 'formFunction', component: FormFunctionComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    DataDemoComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FormDemoComponent,
    SearchListComponent,
    LifecycleComponent,
    FormFunctionComponent,
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
