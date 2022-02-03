import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import NProgress from "nprogress"
// import {store} from "@/store/index"
// console.log("store",store);

// 请求baseUrl
const baseUrl: any = import.meta.env.VITE_APP_WEB_URL
const token = localStorage.getItem('token')
// 设置请求的基本地址
axios.defaults.baseURL = baseUrl

// 请求超时时间
axios.defaults.timeout = 10000
// 设置头部contenttype为json格式
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 请求拦截
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    if (token) {
      // token业务处理
      config.headers && config.headers.token && (config.headers.Authorization = token)
    }
    return config
  },
  (error => {
    return error
  })
)

// 响应拦截
axios.interceptors.response.use(
  (res): AxiosResponse<any> => {
    if (res.data.code === -1) {
      window.location.href = '/'
    }
    return res
  },
  (error => {
    console.error(error);
    return error
  })
)

// 定义响应类型
interface ResType<T> {
  code: number | string
  data?: T
  msg: string
  err?: string
}

// 定义请求Http类型
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  upload<T>(url: string, params: unknown): Promise<ResType<T>>
  download(url: string): void
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  download(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  },
}
export default http