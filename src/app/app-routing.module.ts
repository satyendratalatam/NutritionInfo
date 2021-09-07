import { ReportsComponent } from './reports/reports.component';
import { ShortnutComponent } from './shortnut/shortnut.component';
import { NutritioninfoComponent } from './nutritioninfo/nutritioninfo.component';
import { HomeComponent } from './home/home.component';
import { BenchtestComponent } from './benchtest/benchtest.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductdetailsComponent},
  {path: 'benchtest', component: BenchtestComponent},
  {path: 'nutinfo', component: NutritioninfoComponent},
  {path: 'shortnut', component: ShortnutComponent},
  {path: 'reports', component: ReportsComponent},
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
