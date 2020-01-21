import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatSelectModule,
  MatDialogModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule ,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatTableModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from 'ng2-charts';
import { GaugesModule } from "ng-canvas-gauges";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";

import { TempratureGaugeComponent } from './components/gauge/temprature-gauge/temprature-gauge.component';
import { LargeTempratureGaugeComponent } from './components/gauge/large-temprature-gauge/large-temprature-gauge.component';
import { AirflowGaugeComponent } from './components/gauge/airflow-gauge/airflow-gauge.component';
import { RpmGaugeComponent } from './components/gauge/rpm-gauge/rpm-gauge.component';
import { FuelflowGaugeComponent } from './components/gauge/fuelflow-gauge/fuelflow-gauge.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AllGaugesComponent } from './components/gauge/all-gauges/all-gauges.component';
import { AllChartsComponent } from './components/all-charts/all-charts.component';
import { ExportableTableComponent } from './components/exportable-table/exportable-table.component';

@NgModule({
  declarations: [HomeComponent, TempratureGaugeComponent, LargeTempratureGaugeComponent, AirflowGaugeComponent, RpmGaugeComponent, FuelflowGaugeComponent, WelcomeComponent, AllGaugesComponent, AllChartsComponent, ExportableTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    GaugesModule,
    ChartsModule,
    MatSelectModule,
    MatDialogModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule
  ]
})
export class HomeModule {}
