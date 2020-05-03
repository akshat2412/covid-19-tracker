import { Observable, from, OperatorFunction } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, filter, flatMap, first, concatMap } from 'rxjs/operators'

import { HttpService } from './httpservice.service';
import { urls } from '../constants/urls.constants';
import { INationalDataResponse, IStateData } from '../models/nationaldata.response.interface';
import { IDistrictDataResponse } from '../models/districtdata.response.interface';
import { HttpEvent } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CovidDataService {
    constructor(
        private httpService: HttpService
    ) { }

    public getNationalData(): Observable<IStateData[]> {
        return this.httpService.get(`${urls.COVID19APIBASEURL}/data.json`)
            .pipe(
                map((result: INationalDataResponse) => {
                    return result.statewise.filter((stateData: IStateData) => stateData.state !== 'Total')
                })
            )
    }

    public getDistrictwiseData(statecode: string): Observable<IDistrictDataResponse> {
        return this.httpService.get(`${urls.COVID19APIBASEURL}/v2/state_district_wise.json`)
            .pipe(
                flatMap((result: IDistrictDataResponse[]) => {
                    return result.filter((districtData: IDistrictDataResponse) => {
                        return districtData.statecode === statecode
                    });
                })
            );
    }

    public getStateData(statecode: string): Observable<IStateData> {
        return this.httpService.get(`${urls.COVID19APIBASEURL}/data.json`)
            .pipe(
                flatMap((result: INationalDataResponse) => {
                    return result.statewise.filter((stateData: IStateData) => {
                        return stateData.statecode === statecode;
                    })
                })
            )
    }
}