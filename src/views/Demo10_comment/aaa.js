axios = require('axios')

fun1()

async function fun1() {
    var config = {method: 'get', url: 'http://127.0.0.1:9999/static/package.json',}
    var aaa = await axios(config)
    console.log('111---resp:', aaa.data)
}