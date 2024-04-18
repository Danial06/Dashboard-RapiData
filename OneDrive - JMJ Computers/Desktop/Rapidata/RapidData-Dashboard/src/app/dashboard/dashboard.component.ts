import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more'; // Import highcharts-more if needed
import { Options, SeriesPieOptions } from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {
    this.present = this.getRandomInt(5, 150);
    this.absent = this.getRandomInt(5, 150);
    this.wfh = this.getRandomInt(5, 150);
    this.leave = this.getRandomInt(5, 150);
    this.notYetIn = this.getRandomInt(5, 150);
    this.earlyCheckIn = this.getRandomInt(5, 150);
    this.lateCheckIn = this.getRandomInt(5, 150);
    this.earlyCheckOut = this.getRandomInt(5, 150);
    this.lateCheckOut = this.getRandomInt(5, 150);
    this.totalEmployees = this.present + this.absent + this.wfh + this.leave + this.notYetIn + this.earlyCheckIn + this.lateCheckIn + this.earlyCheckOut + this.lateCheckOut

  }

  title = 'RapidData-Dashboard';
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  range2 = new FormGroup({
    start2: new FormControl<Date | null>(null),
    end2: new FormControl<Date | null>(null),
  });

  //set all vars
  present: number = 0;
  absent: number = 0;
  wfh: number = 0;
  leave: number = 0;
  notYetIn: number = 0;
  earlyCheckIn: number = 0;
  lateCheckIn: number = 0;
  earlyCheckOut: number = 0;
  lateCheckOut: number = 0;
  totalEmployees: number = 0;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  chartOptions2: Highcharts.Options = {};
  chartOptions3: Highcharts.Options = {};

  ngOnInit(): void {

    this.IntializeAllCharts();


  }
  IntializeAllCharts() {

    this.chartOptions = {
      chart: {
        type: 'column',
        width: 700,
        height: 500
      },
      title: {
        text: ""
      },
      xAxis: {
        categories: ['Leave', 'Missed-Punch', 'Comp-Off', 'WFH', "Overtime"],// Add your week dates here
        //gridLineColor: '#ffffff',
      },

      yAxis: {
        min: 0,
        title: {
          text: ''
        },
        gridLineColor: '#ffffff',
      },
      legend: {
        //reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: [
        {
          name: 'Approved',
          type: 'column',

          data: [this.getRandomInt(10, 250), this.getRandomInt(50, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250)]
        },
        {
          name: 'Rejected',
          type: 'column',
          data: [this.getRandomInt(10, 250), this.getRandomInt(50, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250)]
        },
        {
          name: 'Pending',
          type: 'column',
          data: [this.getRandomInt(10, 250), this.getRandomInt(50, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250)]
        }
      ]

    };

    this.chartOptions2 = {
      chart: {
        type: 'column',
        width: 1000,
        height: 500
      },
      title: {
        text: ""
      },
      xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        //gridLineColor: '#ffffff',
      },

      yAxis: {
        min: 0,
        title: {
          text: ''
        },
        gridLineColor: '#ffffff',
      },
      legend: {
        enabled: true
      },
      plotOptions: {
        series: {
          // stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: [
        {
          name: 'Present',
          type: 'column',

          data: [this.getRandomInt(50, 300), this.getRandomInt(50, 300), this.getRandomInt(50, 250), this.getRandomInt(50, 250), this.getRandomInt(50, 250)]
        },
        {
          name: 'Absent',
          type: 'column',
          data: [this.getRandomInt(10, 250), this.getRandomInt(50, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250)]
        },
        {
          name: 'WFH',
          type: 'column',
          data: [this.getRandomInt(10, 250), this.getRandomInt(50, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250)]
        },
        {
          name: 'Leave',
          type: 'column',
          data: [this.getRandomInt(10, 250), this.getRandomInt(50, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250), this.getRandomInt(10, 250)]
        }
      ]

    };
    this.chartOptions3 = {
      chart: {
        type: 'pie',
        width: 600,
        height: 350
      },
      title: {
        text: ""
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',

      },
      plotOptions: {
        pie: {
          innerSize: '50%',
        },
        series: {
          // stacking: 'normal',


          dataLabels: {
            enabled: true
          }
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [
        {
          name: 'Leave Stats',
          type: 'pie',
          data: [
            {
              name: 'Casual Leave',
              y: this.getRandomInt(10, 250)
            },
            {
              name: 'Sick Leave',
              y: this.getRandomInt(10, 250)
            },
            {
              name: 'Maternity Leave',
              y: this.getRandomInt(10, 250)
            },
            {
              name: 'Paternity Leave',
              y: this.getRandomInt(10, 250)
            },
            {
              name: 'Vacation Leave',
              y: this.getRandomInt(10, 250)
            }
          ]

        },

      ],


    };
  }




  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
