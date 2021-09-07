import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatCheckboxModule, MatButtonModule,
  MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatRadioModule,
  MatSelectModule, MatSlideToggleModule,
  MatSliderModule, MatToolbarModule,
  MatCardModule,MatTableModule, MatSidenavModule, MatIconModule, MatPaginatorModule
}
  from '@angular/material';
import { LoginComponent } from './login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BenchtestComponent } from './benchtest/benchtest.component';
import { HomeComponent } from './home/home.component';
import { NutritioninfoComponent } from './nutritioninfo/nutritioninfo.component';
import { ShortnutComponent } from './shortnut/shortnut.component';
import { ReportsComponent } from './reports/reports.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ProductdetailsComponent,
    BenchtestComponent,
    HomeComponent,
    NutritioninfoComponent,
    ShortnutComponent,
    ReportsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    FormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
