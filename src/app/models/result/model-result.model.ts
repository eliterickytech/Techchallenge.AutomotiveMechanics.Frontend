export class ModelResultModel {
      statusCode: number
      data: Data[]
  }
  
  export interface Data {
    id: number
    name: string
    createdDate: string
    lastModifiedDate: any
    cars: any[]
  }