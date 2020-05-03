import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { TableComponent } from './shared/components/table/table.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { InfoCardComponent } from './shared/components/info-card/info-card.component';
import { DistrictViewComponent } from './views/dashboard-view/district-view/district-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { PrecautionsViewComponent } from './views/precautions-view/precautions-view.component';
import { AddNewsViewComponent } from './views/add-news-view/add-news-view.component';
import { MemoryService } from './shared/services/memory.service';


@NgModule({
  declarations: [
    AddNewsViewComponent,
    AppComponent,
    DashboardViewComponent,
    DistrictViewComponent,
    InfoCardComponent,
    LoaderComponent,
    LoginViewComponent,
    PrecautionsViewComponent,
    SidebarComponent,
    TableComponent,
    TopbarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryService, { passThruUnknownUrl: true }),
    NgxMasonryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
