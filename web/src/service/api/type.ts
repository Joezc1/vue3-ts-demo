export interface LoginParams {
    username: string | number
    password: string | number
}
export interface LoginApi {
    login: (params: LoginParams)=> Promise<any>
    register: (params: LoginParams)=> Promise<any>
}

export interface ListApi {
    list: (params: ListParams)=> Promise<any>,
    typeList: () => Promise<any>
}

export interface BillApi {
    add: (params: BillAddParams) => Promise<any>
    get: (params: BillGetParams) => Promise<any>
    del: (params: BillDelParams) => Promise<any>
    update: (params: BillUpdateParams) => Promise<any>
}



export interface CommonApi {
    upload: (params: FormData) => Promise<any>
}

export interface UserApi {
    info: ()=> Promise<any>,
}

export interface FileParams {
    file: any
}

export interface ListParams {
    page_number: string | number
    page_size: string | number
    date: string | number
    type_id: string | number
}



export interface BillAddParams {
    amount: string | number
    date: string | number
    pay_type: number | string
    remark: string
    type_id: string | number
    type_name : string | number
}

export interface BillUpdateParams {
    amount: string | number
    date: string | number
    pay_type: number 
    id: number | string
    remark: string
    type_id: string | number
    type_name : string | number
}

export interface BillGetParams{
    id: string | number
}

export interface BillDelParams{
    id: string | number
}

