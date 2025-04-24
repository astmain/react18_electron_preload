const axios = require('axios')
test_get1()

async function test_get1() {
  let config = { method: 'get', url: 'http://127.0.0.1:9999/get1?name=小许&age=18', params: { aaa: 111 } }
  let {data:resp} = await axios(config)
  console.log('111---resp:', resp)
}
