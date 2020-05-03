import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidDataService } from 'src/app/shared/services/coviddata.service';
import { IDistrictData, IDistrictDataResponse } from 'src/app/shared/models/districtdata.response.interface';
import { IStateData } from 'src/app/shared/models/nationaldata.response.interface';
import { ITableHeader } from 'src/app/shared/models/tableheader.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-district-view',
  templateUrl: './district-view.component.html',
  styleUrls: ['./district-view.component.scss']
})
export class DistrictViewComponent implements OnInit {
  public isWaiting: boolean = false;
  public districtWiseData: IDistrictData[]; 
  public stateData: IStateData;
  public tableData: any[];
  public headers: ITableHeader[] = [
    { displayName: 'District', fieldName: 'district' },
    { displayName: 'Reported cases', fieldName: 'confirmed' },
    { displayName: 'Active cases', fieldName: 'active' },
    { displayName: 'Recovered', fieldName: 'recovered' },
    { displayName: 'Deceased', fieldName: 'deaths' },
  ];

  private stateCode: string;
  
  constructor(
    private route: ActivatedRoute,
    private covidDataService: CovidDataService
  ) { }

  ngOnInit(): void {
    this.isWaiting = true;
    this.stateCode = this.route.snapshot.paramMap.get('statecode');
    const districtWiseData = this.covidDataService.getDistrictwiseData(this.stateCode);
    const stateData = this.covidDataService.getStateData(this.stateCode);
    forkJoin([districtWiseData, stateData]).subscribe((data) => {
      this.districtWiseData = data[0].districtData;
      this.stateData = data[1];
      this.setTableData();
      this.isWaiting = false;
    });
  }

  private setTableData(): void {
    this.tableData = this.districtWiseData.map((districtData: IDistrictData) => {
      return {
        district: districtData.district,
        confirmed: districtData.confirmed,
        active: districtData.active,
        recovered: districtData.recovered,
        deaths: districtData.deceased
      }
    })
  }
}
