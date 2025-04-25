const axios = require('axios')
const express = require('express') //  npm i express
const bodyParser = require('body-parser') // npm i body-parser
const cors = require('cors') // npm i cors
const os = require('os') //  npm i express
const app = express()
app.use('/static', express.static('static')) //设置静态文件目录
app.use(cors({ origin: '*', methods: '*', allowedHeaders: '*' })) //跨域设置
app.use(bodyParser.json())

app.get('/index', (req, res, next) => {
  console.log('请求接口---:', '/index')
  console.log('请求参数---:', req.query)
  let result = { code: 200, msg: '成功:请求接口/index', data: { params: req.query } }
  console.log('响应结果---:', JSON.stringify(result))
  res.json(result)
})

app.get('/get1', (req, res, next) => {
  console.log('请求接口---:', '/get1')
  console.log('请求参数---:', req.query)
  let result = { code: 200, msg: '成功:请求接口/get1', data: { params: req.query } }
  console.log('响应结果---:', JSON.stringify(result))
  res.json(result)
})

app.post('/post1', (req, res, next) => {
  console.log('请求接口---:', '/post1')
  console.log('请求参数---:', req.body)
  let result = { code: 200, msg: '成功:/post1-请求成功', data: { body: req.body } }
  console.log('响应结果---:', JSON.stringify(result))
  res.json(result)
})

app.listen(9999, () => {
  console.log('==============================')
  console.log(`
  // 本地
  http://127.0.0.1:9999/index
  http://127.0.0.1:9999/get1?name=小许&age=18
  http://127.0.0.1:9999/static/111.png
  http://127.0.0.1:9999/static/wallpaper.jpeg

  // 服务器
  http://103.119.2.223:9999/index
  http://103.119.2.223:9999/static/111.png
  http://103.119.2.223:9999/static/wallpaper.jpeg




  // 配置内网穿透隧道
  账号1311192345@qq.com
  密码uuuuuu123456
  官网                    https://dashboard.cpolar.com/auth
  查看文档                https://www.cpolar.com/docs
  安装exe                下载window系统的E:\AAAcpolar
  查看官网token           https://dashboard.cpolar.com/auth
  cmd执行验证token        cpolar authtoken M2M4NDk2YmItMmFlZS00OWJiLTk5YzItYzljOWVlZjc4ZDlh
  本地cpolarUI界面        http://localhost:9200/#/status/online
  最后完成
  配置9999端口映射	    http://521b79c9.r7.cpolar.top/get1    521b79c9  经常会变化,记得更改
  


  http://42a3403.r7.cpolar.top/
  https://42a3403.r7.cpolar.top/index
  https://42a3403.r7.cpolar.top/get1?name=小许&age=18
  https://42a3403.r7.cpolar.top/static/111.png
  https://42a3403.r7.cpolar.top/static/wallpaper.jpeg
  
  
  `)
  // 103.119.2.223:9999/index   百度云 安全组有问题 建议使用  宝塔配置安全组
})
