module.exports = {
    title: "Lingi-log",
    description: "Welcome!",
    base: "/",
    // theme: "@vuepress/vue",
    themeConfig: {
        logo: "/thumbnail.png",
        footer: "jh",
        nav: [
            { "text": "Posts", "link": "/posts/", "position": "left", "external": false },
            { "text": "foo", "link": "/foo/", "position": "left", "external": false },
            { "text": "Say hi!", "link": "mailto:hanjh04@gmail.com", "position": "right", "external": true },
            { "text": "About", "link": "/About", "position": "right", "external": false }
        ],
        lastUpdated: 'Last Updated',
        // algolia: {
        //     apiKey: '7055df7452cbcc1e86f33eb175f3d949',
        //     appId: '376LIH16NX',
        //     indexName: 'getstarted_actors',
        //     algoliaOptions: {
        //         hitsPerPage: 10,
        //     }
        // },
        sidebar: {
            '/foo/': [{
                title: 'Foo',
                collapsable: false,
                children: [
                    "",
                    "one",
                    "two"
                ]
            }],
            '/posts/': [{
                title: 'Others',
                children: [
                    "180829_vscode 환경설정",
                    "180907_페이지 교체 알고리즘",
                    "180917_https에 대해",
                    "180917_tree의 순회 방법",
                    "180917_암호화",
                    "180918_yum",
                    "180919_tomcat의 동작 방식",
                    "181013_network",
                    "181013_암호화2",
                    "181024_study",
                    "181025_glibc_update",
                    "181025_query튜닝",
                    "181102_서버사이드랜더링and클라이언트사이드랜더링",
                    "181120_vue",
                    "181205_vue_dynamic_component",
                    "181205_공부Keywords",
                    "181213_angular",
                    "181230_docker-mongodb",
                    "181230_macbook 환경설정",
                ]
            }, {
                title: 'Algorithm',
                children: []
            }, {
                title: 'DB',
                children: []
            }, {
                title: 'Linux',
                children: []
            }],
            // fallback
            '/': []
        }
    },
    head: [
        // ['link', { rel: "icon", href:  }]
    ],
    markdown: {
        anchor: {
            permalink: false
        }
    },

};