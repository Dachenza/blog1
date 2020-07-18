module.exports = {
    title: '大陈子的blog',
    base: '/blog1/',
    head: [
        ['link', {rel: 'icon', href: '/link.ico'}],
        ['meta', {name : 'autoor',content : 'vuepress'}],
        ['meta', {name: 'keywords', content: 'vupress介绍'}],

    ],
    themeConfig: {
        logo: 'hero.jpg',
        nav: [
            {text: '主页', link: '/'},
            {
                text: '导航',link: '/guide/' ,items: [
                    {text:'学习',link: '/learn/'},
                    {text:'生活',link: '/life/'},
                ]
            },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {
                        text: 'Chinese', link: '/language/chinese/', items: [
                            {text: '主页', link: '/'},
                            {text: '导航', link: '/guide/'},
                        ]
                    },
                    {
                        text: 'Japanese', link: '/language/japanese/', items: [
                            {text: '主页', link: '/'},
                            {text: '导航', link: '/guide/'},
                        ]
                    }
                ]
            },
            {text: '外部网站', link: 'https://baidu.com'},
        ],
        sidebar: {
            "/learn/": [
                '',
                'java/',
                'python/',
            ],
            "/life/": [
                'game',
                'movie',
                'music'
            ],
            "/guide/": [
                '/',
                '/learn/',
                '/life/',
            ],
        },
        displayAllHeaders: true, // 默认值：false
        lastUpdated: 'Last Updated',
    }

}