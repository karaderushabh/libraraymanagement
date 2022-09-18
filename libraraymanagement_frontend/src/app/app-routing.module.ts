import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { CompletedlistComponent } from './completedlist/completedlist.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'login', component: UserloginComponent },
  { path: 'booklist', component: BooklistComponent },
  { path: 'userregistration', component: UserregistrationComponent },

  {
    path: 'userdashboard',
    component: UserdashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'completedlist',
    component: CompletedlistComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
