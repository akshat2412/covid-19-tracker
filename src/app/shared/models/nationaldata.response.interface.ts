export interface INationalDataResponse {
    cases_time_series: any[],
    statewise: IStateData[],
    tested: any[]
}

export interface IStateData {
    active: number;
    confirmed: number;
    deaths: number;
    deltaconfirmed: number;
    deltadeaths: number;
    deltarecovered: number;
    lastupdatedtime: string;
    recovered: number;
    state: string;
    statecode: string;
    statenotes: string;
}