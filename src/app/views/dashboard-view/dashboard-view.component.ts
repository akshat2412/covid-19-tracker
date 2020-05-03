import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/shared/services/coviddata.service';
import { ITableHeader } from 'src/app/shared/models/tableheader.interface';
import { IStateData } from 'src/app/shared/models/nationaldata.response.interface';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  public isWaiting: boolean = false;
  public tableData: any[];
  public headers: ITableHeader[] = [
    { displayName: 'State', fieldName: 'state' },
    { displayName: 'Reported cases', fieldName: 'confirmed' },
    { displayName: 'Active cases', fieldName: 'active' },
    { displayName: 'Recovered', fieldName: 'recovered' },
    { displayName: 'Deceased', fieldName: 'deaths' },
  ];

  constructor(
    private covidDataService: CovidDataService
  ) { }

  ngOnInit(): void {
    this.isWaiting = true;
    this.covidDataService.getNationalData()
      .subscribe(res => {
        console.log(res);
        this.tableData = res.map((stateData: IStateData) => {
          return {
            state: stateData.state,
            confirmed: stateData.confirmed,
            active: stateData.active,
            recovered: stateData.recovered,
            deaths: stateData.deaths,
            link: {
              property: 'state',
              redirectPath: `/district/${stateData.statecode}`
            }
          }
        });
        console.log(this.tableData);
        this.isWaiting = false;
      });

    this.covidDataService.getDistrictwiseData('AN').subscribe(res => {
      console.log(res);
    })

  }

}
