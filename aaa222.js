
axios=require("axios")

fun1()


async function fun1() {
    let config = {method: 'get', url: 'http://127.0.0.1:9999/api/user.json', data: {aaa: 111}}
    let res = await axios(config)

    console.log('res.data---', res.data)
}