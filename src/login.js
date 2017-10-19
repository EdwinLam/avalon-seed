import '@/css/style.css'
const root = avalon.define({
  $id: 'root',
  /* 当前页面 */
  currPage: '',
  /* 当前vm的id */
  curId: '',
  /* 初始化 */
  init: function () {
    console.log('login')

  }
})

/* 初始化执行 */
avalon.ready(function () {
  root.init()
  avalon.scan(document.body)
})
