import axios from "axios";

let no_message = false
globalThis.config_axios_api = function config_axios_api({ name = "axios_api", baseURL, debug = false, timeout = 30000 }) {
	console.log('axios_create 初始化基础链接  baseURL         :', baseURL)
	axios.defaults.headers.get['Cache-Control'] = 'no-cache' // 禁用缓存
	axios.defaults.headers.get['Pragma'] = 'no-cache' // 禁用缓存兼容老旧浏览器
	const axios_api = axios.create({
		// baseURL: "http://127.0.0.1:8989", //后端接口地址
		// baseURL: baseURL, //后端接口地址
		// withCredentials: false,// 用于配置请求接口跨域时是否需要凭证
		timeout: timeout, // 超时时间，单位毫秒
	});

	// 请求拦截器***************************************************
	axios_api.interceptors.request.use((config) => {


		

		
		if(config?.headers_custom){
		    // console.log(11111111,     config?.headers_custom      )
			config.headers['headers_custom']=    JSON.stringify(  config.headers_custom    )   
		}

		
		


		return config;
	}, (error) => {
		console.error("axios_api请求异常====》", error);
		return Promise.reject(error);
	});

	//响应拦截器*****************************************************
	axios_api.interceptors.response.use((response) => {
		if (response.data.code === 200) {


		} //
		else if (response.data.code === 201) {

		} //
		else if (response.data.code === 400) {

		} //
		else //
		{

		}

		return response.data;
	}, (error) => {
		return Promise.reject(error);
	});




	// hook钩子axios_api
	window[name] = function(config) {
		console.log(`111---config:`,     config        )
		return axios_api(config)
	}
	return axios_api

}

export default config_axios_api