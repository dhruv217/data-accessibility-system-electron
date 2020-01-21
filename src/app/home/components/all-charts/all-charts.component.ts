import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { SensorsDataStoreService } from "../../services/sensors-data-store.service";
import { map, tap, filter } from "rxjs/operators";
import { Subscription } from "rxjs";
import { BaseChartDirective } from "ng2-charts";
import "chartjs-plugin-streaming";

@Component({
  selector: "app-all-charts",
  templateUrl: "./all-charts.component.html",
  styleUrls: ["./all-charts.component.scss"]
})
export class AllChartsComponent implements AfterViewInit, OnDestroy {

  allSubscriptions: Subscription[] = [];

  sensorsDataset$ = this.sensorsDataStore.currentData$.pipe(
    filter((value, index) => index % 2 === 0),
    tap(x => console.log(x))
  );

  options: any = {
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            duration: 20000,
            refresh: 1000,
            delay: 2000
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Values"
          }
        }
      ]
    }
  };
  /* @ViewChild("largeTempChart", { static: true })
  largeTempChart: BaseChartDirective; */

  constructor(private sensorsDataStore: SensorsDataStoreService) {}

  ngAfterViewInit() {
    this.allSubscriptions.push(
      this.sensorsDataset$.subscribe(val => {
        this.largeTempDataset[0].data.push({ x: val.CreatedAt, y: val.Temprature1 });
        this.tempDataSet[0].data.push({ x: val.CreatedAt, y: val.Temprature2 });
        this.tempDataSet[1].data.push({ x: val.CreatedAt, y: val.Temprature3 });
        this.tempDataSet[2].data.push({ x: val.CreatedAt, y: val.Temprature4 });
        this.airFlowDataSet[0].data.push({ x: val.CreatedAt, y: val.AirFlow });
        this.rpmDataSet[0].data.push({ x: val.CreatedAt, y: val.RPM });
        this.fuelFlowDataSet[0].data.push({ x: val.CreatedAt, y: val.FuelFlow });
      })
    );
  }

  ngOnDestroy() {
    this.allSubscriptions.forEach(s => s.unsubscribe());
  }

  largeTempDataset: any[] = [
    {
      label: "Temprature 1 °C",
      borderColor: "#00bcd4",
      backgroundColor: "#80deea",
      fill: true,
      lineTension: 0,
      borderDash: [8, 4],
      data: []
    }
  ];
  tempDataSet: any[] = [
    {
      label: "Temprature 2 °C",
      borderColor: "#00bcd4",
      backgroundColor: "#80deea",
      fill: true,
      lineTension: 0,
      borderDash: [8, 4],
      data: []
    },
    {
      label: "Temprature 3 °C",
      borderColor: "#9c27b0",
      backgroundColor: "#ce93d8",
      fill: true,
      opacity: 80,
      lineTension: 0,
      borderDash: [8, 4],
      data: []
    },
    {
      label: "Temprature 4 °C",
      borderColor: "#e91e63",
      backgroundColor: "#f48fb1",
      fill: true,
      opacity: 80,
      lineTension: 0,
      borderDash: [8, 4],
      data: []
    }
  ];
  airFlowDataSet  = [
    {
      label: "Air FLow",
      borderColor: "#3f51b5",
      backgroundColor: "#9fa8da",
      fill: true,
      opacity: 80,
      lineTension: 0,
      borderDash: [8, 4],
      data: []
    }
  ];

  rpmDataSet  = [
    {
      label: "RPM",
      borderColor: "#e91e63",
      backgroundColor: "#f48fb1",
      fill: true,
      lineTension: 0,
      borderDash: [8, 4],
      data: []
    }
  ];

  fuelFlowDataSet  = [
    {
      label: "Fuel Flow",
      borderColor: "#ffc107",
      backgroundColor: "#ffe082",
      fill: true,
      lineTension: 0,
      borderDash: [8, 4],
      data: []
    }
  ];
}
