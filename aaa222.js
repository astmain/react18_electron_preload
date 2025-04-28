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
];

function transformData(data) {
    return data.map(item => {
        const newItem = {...item, handle: {label: item.label, key: item.path},}
        if (item.children) {
            newItem.children = transformData(item.children);
        }
        return newItem;
    });
}


let new_data = transformData(router_children);
console.log(        JSON.stringify(      new_data    )        );
    