/*
 * @Author: zhaochao
 * @Date: 2022-01-23 11:30:17
 * @LastEditTime: 2022-01-23 11:34:07
 * @LastEditors: zhaochao
 * @Description: 该ts文件为定义参数的type类型
 */
export type LoginSubmitType = {
    checked: boolean
    password: string | number
    username: string | number

    [other: string]: any
}

export type StoreLoginType = {
    username: string | number,
    password:string | number
}

