import { Hospital } from '@prisma/client';
export declare class HospitalEntity implements Hospital {
    id: string;
    dutyAddr: string;
    dutyAddr1Depth: string;
    dutyAddr2Depth: string;
    dutyAddr3Depth: string;
    dutyDiv: string;
    dutyDivNam: string;
    dutyEmcls: string;
    dutyEmclsName: string;
    dutyEryn: number;
    dutyEtc: string;
    dutyInf: string;
    dutyMapimg: string;
    dutyName: string;
    dutyTel1: string;
    dutyTel3: string;
    dutyTime1c: string;
    dutyTime1s: string;
    dutyTime2c: string;
    dutyTime2s: string;
    dutyTime3c: string;
    dutyTime3s: string;
    dutyTime4c: string;
    dutyTime4s: string;
    dutyTime5c: string;
    dutyTime5s: string;
    dutyTime6c: string;
    dutyTime6s: string;
    dutyTime7c: string;
    dutyTime7s: string;
    dutyTime8c: string;
    dutyTime8s: string;
    wgs84Lat: number;
    wgs84Lon: number;
    startLunch: string;
    endLunch: string;
}
