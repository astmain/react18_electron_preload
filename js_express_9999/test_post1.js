const axios = require('axios')
test_post1()

async function test_post1() {
  let config = { method: 'post', url: 'http://127.0.0.1:9999/post1', data: { name: '小许', age: 18 } }
  let { data: resp } = await axios(config)
  console.log('111---resp:', resp)
}
