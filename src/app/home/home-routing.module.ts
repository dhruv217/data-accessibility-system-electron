import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AllGaugesComponent } from './components/gauge/all-gauges/all-gauges.component';
import { AllChartsComponent } from './components/all-charts/all-charts.component';
import { ExportableTableComponent } from './components/exportable-table/exportable-table.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'gauges', component: AllGaugesComponent },
      { path: 'charts', component: AllChartsComponent },
      { path: 'table', component: ExportableTableComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
