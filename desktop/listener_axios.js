globalThis.g_time = Date.now() + 100
let {ipcMain, session} = require("electron")
session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    // console.log('details.url ---:', details.url, details.requestHeaders)

    if (details?.requestHeaders["custom_Cookie"]) {
        details.requestHeaders['Cookie'] = details?.requestHeaders["custom_Cookie"]
    }

    if (details?.requestHeaders["custom_User-Agent"]) {
        details.requestHeaders['User-Agent'] = details?.requestHeaders["custom_User-Agent"]
    }


    if (details?.requestHeaders["headers_custom"]) {
        const headers_custom = JSON.parse(details.requestHeaders["headers_custom"])
        // console.log(`headers_custom===:`, headers_custom)
        for (const key in headers_custom) {
            const value = headers_custom[key]
            // console.log(`listener_axios_api_headers_custom---:`, key, "=", value)
            details.requestHeaders[key] = value
        }
        // console.log(`headers_custom---完成:`,     details.requestHeaders        )
    }


    // console.log(`111---details.url:`, details.url)
    // 为了解决electron开启nodeIntegration开启node集成后数据没办法事实更新不得以的办法
    // if (details.url.includes("22222") && details.url.includes(".vue")) {
    if (details.url.includes("5566") && details.url.includes("jsx")) {
        let par = url_parse(details.url)
        if (par?.params?.t) {
            let t = Number(par?.params?.t)
            // console.log(`111---url:`, details.url)
            if (t > g_time) {
                console.log("编辑器代码保存---强制刷新")
                // console.log(`333---getURL:`,  mainWindow.webContents.getURL())
                mainWindow.webContents.reload()
                g_time = t + 100
            }
        }
    }


    callback({requestHeaders: details.requestHeaders})
})


function url_parse(url) {
    const parsedUrl = new URL(url);
    const result = {
        protocol: parsedUrl.protocol, hostname: parsedUrl.hostname, pathname: parsedUrl.pathname, params: {}, _path_num: 0, _path_first: "", // 新增，用于存储第一级路径
        _path_last: "", // 新增，用于存储最后一级路径
    };

    // 解析查询参数
    parsedUrl.searchParams.forEach((value, key) => {
        result.params[key] = value;
    });

    // 解析路径层级
    const pathParts = parsedUrl.pathname.split("/").filter((part) => part);
    result._path_num = pathParts.length;
    for (let i = 0; i < pathParts.length; i++) {
        result[`_path${i + 1}`] = pathParts[i];
    }

    // 获取第一级路径和最后一级路径
    if (pathParts.length > 0) {
        result._path_first = pathParts[0];
        result._path_last = pathParts[pathParts.length - 1];
    }

    return result;
}

