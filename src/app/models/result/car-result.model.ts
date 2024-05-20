export class CarResultModel {
    statusCode: number
    data: Data[]
  }
  
  export interface Data {
    id: number
    yearManufactured: number
    plate: string
    createdDate: string
    lastModifiedDate: any
  }
  