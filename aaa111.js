let router_children = [
    {
        index: true,
        label: '首页',
        path: 'Home',
        Component: "Home",
        icon: "111",
    },
    {
        label: '测试',
        path: 'Test0',
        Component: "Test2",
        icon: "111",
        children: [
            {label: 'Test2', path: "Test2", icon: 11, Component: "Test2"},
            {label: 'Test3', path: "Test3", icon: 11, Component: "Test3"},
        ],
    },
]


// 使用递归的方式将数据改造成

let new_data = [
    {
        index: true,
        label: '首页',
        path: 'Home',
        Component: "Home",
        icon: "000",
        handle: {"label": "首页", key: "Home"},
    },
    {
        label: '测试',
        path: 'Test0',
        Component: "Test2",
        icon: "111",
        handle: {"label": "测试", key: "Test0"},
        children: [
            {label: '测试2', path: "Test2", icon: "222", Component: "Test2", handle: {"label": "测试2", key: "Test2"},},
            {label: '测试3', path: "Test3", icon: "333", Component: "Test3", handle: {"label": "测试3", key: "Test3"},},
        ],
    },

]