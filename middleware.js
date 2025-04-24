module.exports = (req, res, next) => {
    // 允许所有域名进行跨域调用
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 允许的请求头
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // 允许的请求方法
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
};