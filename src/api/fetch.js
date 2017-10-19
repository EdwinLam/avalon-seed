import axios from 'axios'
import authUtil from 'utils/authUtil'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (authUtil.getToken()) {
    config.headers['Authorization'] =  'Bearer ' + authUtil.getToken()
  }
  return config
}, error => {
  // Do something with request error
  iView.Message.error(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response.data,

  error => {

    return Promise.reject(error)
  }
)

export default service
