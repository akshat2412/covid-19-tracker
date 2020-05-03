export interface IDistrictDataResponse {
    state: string;
    statecode: string;
    districtData: IDistrictData[]
}

export interface IDistrictData {
    district: string;
    notes: string;
    active: number;
    confirmed: number;
    deceased: number;
    recovered: number;
    delta: {
        confirmed: number;
        deceased: number;
        recovered: number;
    };
}