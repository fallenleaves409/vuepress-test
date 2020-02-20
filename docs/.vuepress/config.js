module.exports = {
    base: '/vuepress test/',
    title: 'my test',
    description: 'vuepress 测试',
    dest: './pulic',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ],
        lastUpdate: "Last Update",
        smoothScroll: true,
        sidebar: [
            {
                title: '规范',
                collapsable: false,
                children: [
                    '/规范/one',
                ]
            },
            {
                title: 'api',
                children: [
                    '/api/extend1',
                    '/api/extend2'
                ]
            },
        ]
    }
}