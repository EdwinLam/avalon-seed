import _ from 'lodash'
import '@/css/style.css'
import routerService from '@/service/routerService'
import authApi from 'api/authApi'

const root = avalon.define({
  $id: 'root',
  /* 当前页面 */
  currPage: '',
  /* 当前vm的id */
  curId: '',
  /* 初始化 */
  init: async function() {
    const res = await authApi.login('test', 'test')
    console.log(res)
    const rootVm = root
    const defaultIndex = '/index'
    routerService.initRouter({rootVm, defaultIndex})
  }
})

/* 初始化执行 */
avalon.ready(function () {
  root.init()
  avalon.scan(document.body)
})
