import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { DistrictViewComponent } from './views/dashboard-view/district-view/district-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { PrecautionsViewComponent } from './views/precautions-view/precautions-view.component';
import { AddNewsViewComponent } from './views/add-news-view/add-news-view.component';
import { NewsViewComponent } from './views/news-view/news-view.component';
import { CanActivateRouteGaurdService as CanActivateRouteGaurd} from './shared/services/can-activate-route-gaurd.service';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardViewComponent},
  { path: 'district/:statecode', component: DistrictViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'precautions', component: PrecautionsViewComponent },
  { path: 'news', component: NewsViewComponent },
  { path: 'news/add', component: AddNewsViewComponent, canActivate: [CanActivateRouteGaurd] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
