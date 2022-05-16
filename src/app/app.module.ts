import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

const config = {
  apiKey: 'AIzaSyAEZBZCenO6apbMC5dVxTt_sTtwKnzwfWw',
  authDomain: 'shopping-app-c6955.firebaseapp.com',
  projectId: 'shopping-app-c6955',
  storageBucket: 'shopping-app-c6955.appspot.com',
  messagingSenderId: '639700233970',
  appId: '1:639700233970:web:b4101c1462dd93b9526a6b',
  measurementId: 'G-DZ6BQG1WHT',
};

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireDatabaseModule, // storage
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shoppingCart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'order-sucess',
        component: OrderSuccessComponent,
        canActivate: [AuthGuardService],
      },

      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },
      {
        path: 'my/orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuardService],
      },
    ]),
    NgbModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
