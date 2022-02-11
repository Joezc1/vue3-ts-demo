import { Module } from "vuex"
import { RootState } from "../index"
import { StoreLoginType } from "@/helper/type"
import loginApi from "@/service/api/login"

export interface userState {
    counter: number,
    token: string | null,
    isLogin: boolean,
    userInfo: object | null,
    tabbarHeight: number | string
}

export const store: Module<userState, RootState> = {
    namespaced: true,
    state: (): userState => ({
        counter: 0,
        token: '',
        isLogin: false,
        userInfo: null,
        tabbarHeight: 0
    }),
    mutations: {
        setToken(state: userState, newVal: string): void {
            state.token = newVal
            // localStorage.removeItem('token')
            localStorage.clear()
            localStorage.setItem('token', newVal)
        },
        setTabbarHeight(state: userState, newVal: string): void {
            state.tabbarHeight = newVal
        },
        setLogin(state: userState, newVal: string): void {
            state.isLogin = newVal
        },
        increment(state: userState, newVal: number): void {
            state.counter = newVal
        },
        logout(state: userState): void {
            state.isLogin = false
            localStorage.clear()
            window.location.href = '/'
        }
    },
    actions: {
        // 用户注册
        register(context: any, data: StoreLoginType): Promise<any> {
            return new Promise(async (resolve, reject) => {
                const res = await loginApi.register(data)
                resolve(res)
            }).catch((error: any) => {
                console.error(error)
            })
        },
        // 用户登录
        login(context: any, data: StoreLoginType): Promise<any> {
            return new Promise(async (resolve, reject) => {
                const res = await loginApi.login(data)
                resolve(res)
            }).catch((error: any) => {
                console.error(error)
            })
        }
    }
}