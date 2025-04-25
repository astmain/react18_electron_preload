const axios = require('axios')
const express = require('express') //  npm i express
const bodyParser = require('body-parser') // npm i body-parser
const cors = require('cors') // npm i cors
const os = require('os') //  npm i express
const app = express()
app.use('/static', express.static('static')) //设置静态文件目录
app.use(express.static('.')) //设置静态文件目录          http://127.0.0.1:9999/package.json     http://127.0.0.1:9999/api/user.json
app.use(cors({origin: '*', methods: '*', allowedHeaders: '*'})) //跨域设置
app.use(bodyParser.json())

app.get('/index', (req, res, next) => {
    console.log('请求接口---:', '/index')
    console.log('请求参数---:', req.query)
    let result = {code: 200, msg: '成功:请求接口/index', data: {params: req.query}}
    console.log('响应结果---:', JSON.stringify(result))
    res.json(result)
})


app.get('/api_mock', (req, res, next) => {
    let data = req.query.data
    console.log(`mock---data:`, data)
    let result = require(`./${data}`)
    console.log(`mock---result:`, result)
    res.json(result)
})

app.get('/get1', (req, res, next) => {
    console.log('请求接口---:', '/get1')
    console.log('请求参数---:', req.query)
    let result = {code: 200, msg: '成功:请求接口/get1', data: {params: req.query}}
    console.log('响应结果---:', JSON.stringify(result))
    res.json(result)
})

app.post('/post1', (req, res, next) => {
    console.log('请求接口---:', '/post1')
    console.log('请求参数---:', req.body)
    let result = {code: 200, msg: '成功:/post1-请求成功', data: {body: req.body}}
    console.log('响应结果---:', JSON.stringify(result))
    res.json(result)
})

app.listen(9999, () => {
    console.log(`
  
  http://127.0.0.1:9999/index     
  http://127.0.0.1:9999/mock?data=user.json   
  http://127.0.0.1:9999/package.json     
  http://127.0.0.1:9999/api/user.json
  http://127.0.0.1:9999/api/comment_list.json

  `)

})
