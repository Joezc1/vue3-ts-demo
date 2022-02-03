import { Module } from "vuex"
import { RootState } from "../index"
import { StoreLoginType } from "@/helper/type"
import loginApi from "@/service/api/login"

export interface userState{
    counter: number,
    token: string | null,
    isLogin: boolean,
    userInfo: object | null,
    activeMenuIndex: number | string
}

export const store:Module<userState,RootState> = {
    namespaced:true,
    state: ():userState => ({
        counter: 0,
        token: '',
        isLogin: false,
        userInfo: null,
        activeMenuIndex: 'home'
    }),
    mutations: {
        setToken(state:userState,newVal:string):void{
            state.token = newVal
            localStorage.setItem('token',newVal)
        },
        increment(state:userState,newVal:number):void{
            state.counter = newVal
        },
        changeMenu(state:userState,newVal:string | number):void{
            state.activeMenuIndex = newVal
        }
    },
    actions: {
        // 用户注册
        register(context:any,data:StoreLoginType):Promise<any>{
            return new Promise(async (resolve,reject) => {
                const res = await loginApi.register(data)
                resolve(res)
            }).catch((error:any)=>{
                console.error(error)
            })
        },
        // 用户登录
        login(context:any,data:StoreLoginType):Promise<any>{
            return new Promise(async (resolve,reject) => {
                const res = await loginApi.login(data)
                resolve(res)
            }).catch((error:any)=>{
                console.error(error)
            })
        }
    }
}