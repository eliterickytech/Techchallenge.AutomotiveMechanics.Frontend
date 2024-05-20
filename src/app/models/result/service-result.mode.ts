import { CarResultModel } from "./car-result.model";

export class ServiceResultModel{
    statusCode: number
    data: Data[]
}
export interface Data {
    id: number;
    name: string;
    carId: number;
    carResult: CarResultModel;
}