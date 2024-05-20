export class LoginResultModel {
    statusCode: number
    data: Data

    constructor() {
        this.data = {
            name: '',
            email: '',
            token: '',
            message: '',
            createdDate: '',
            lastModifiedDate: null
        };
    }
}
export interface Data {
    name: string
    email: string
    token: string
    message: string
    createdDate: string
    lastModifiedDate: any
}
  