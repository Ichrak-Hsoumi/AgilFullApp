import { DashboardAgService } from './../_services/dashboard-ag.service';
import { AgentService } from 'app/_services/agent.service';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];

    currentUser: any;
    passed:any;
    waiting:any;
    total:any;

  constructor(public agentservice: AgentService, public dashboardAgService: DashboardAgService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.agentservice.currentUser().subscribe(res => {
      console.log('Current U ser!', res);
      /* this.router.navigateByUrl('user'); */
    });
    this.currentUser = this.tokenStorageService.getUser();

    console.log("passed : ", this.dashboardAgService.passed);
    console.log("waiting : ", this.dashboardAgService.waiting);
    console.log("total : ", this.dashboardAgService.getTotal());
    this.passed = this.dashboardAgService.passed;
    this.waiting = this.dashboardAgService.waiting;
    this.total = this.dashboardAgService.getTotal();
    
    
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['52%', '32%', '16%'],
        series: [52, 32, 16]
      };
      this.emailChartLegendItems = [
        { title: 'Buy Vocher', imageClass: 'fa fa-circle text-info' },
        { title: 'Charge card', imageClass: 'fa fa-circle text-danger' },
        { title: 'Test', imageClass: 'fa fa-circle text-warning' }
      ];

     

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
          [412, 364, 412, 600, 243, 480, 370, 300, 368, 636, 800, 636]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Buy Vocher', imageClass: 'fa fa-circle text-info' },
        { title: 'Charge card', imageClass: 'fa fa-circle text-danger' },
        { title: 'Test', imageClass: 'fa fa-circle text-warning' }
      ];


    }

}
