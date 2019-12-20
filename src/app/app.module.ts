import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shares/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { NewsCardComponent } from './shares/components/news-card/news-card.component';
import { FooterComponent } from './shares/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CustomDatePipe,
    JwPaginationComponent,
    NewsDetailComponent,
    NewsCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
