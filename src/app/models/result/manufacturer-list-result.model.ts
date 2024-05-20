export class ManufacturerListResult {
    statusCode: number
    data: Data[]

    constructor() {
        this.data = [{
            id: 0,
            name: '',
            createdDate: '',
            lastModifiedDate: null,
            cars: []
        }];
    }
  }
  
  export interface Data {
    id: number
    name: string
    createdDate: string
    lastModifiedDate: any
    cars: any[]
  }
  