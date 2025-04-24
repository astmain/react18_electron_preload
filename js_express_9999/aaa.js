const axios = require('axios')
test_get1()

async function test_get1() {
//   let config = { method: 'get', url: 'https://api.seniverse.com/v3/location/search.json?key=SKddJ-aKQhqiEFiUf&q=泉州', params: { aaa: 111 } }
//   let config = { method: 'get', url: 'https://api.seniverse.com/v3/weather/now.json?key=SKddJ-aKQhqiEFiUf&location=quanzhou&language=zh-Hans&unit=c', params: { aaa: 111 } }
    let config = {method: 'get', url: 'https://api.seniverse.com/v3/weather/now.json?key=SKddJ-aKQhqiEFiUf&location=泉州&language=zh-Hans&unit=c', params: {aaa: 111}}
    let {data: resp} = await axios(config)
    console.log('111---resp:', JSON.stringify(resp))
}


// {"results":[{"location":{"id":"WSKMS3KBE2JM","name":"泉州","country":"CN","path":"泉州,泉州,福建,中国","timezone":"Asia/Shanghai","timezone_offset":"+08:00"},"now":{"text":"多云","code":"4","temperature":"22"},"last_update":"2025-03-12T23:10:17+08:00"}]}

//
// 获取城市,name
// 获取天球,text
// 获取温度,temperature
