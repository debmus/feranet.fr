module.exports = {
    locales: {
        '/': {
            lang: 'fr-FR',
            title: "Feranet",
            description: "Wiki & Outils",
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
    ],
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/medium-zoom'],
        ['@vuepress/nprogress'],
    ],
    themeConfig: {
        logo: '/assets/logo.svg',
        smoothScroll: true,
        searchPlaceholder: 'Rechercher ...',
        nav: [
            { text: 'Wiki', link: '/wiki/' },
            { text: 'Outils', link: 'https://tools.feranet.fr' },
            { text: 'Images', link: 'https://cloud.feranet.fr/s/TWYWF6KrpdfXCf9' },
            { text: 'GitHub', link: 'https://github.com/debmus/feranet.fr' }
        ],
        sidebar: [
            ['/wiki/', 'Wiki'],
            {
                title: 'Bash',
                collapsable: false,
                children: [
                    ['wiki/bash/conditions', 'Les conditions'],
                    ['wiki/bash/manipulations', 'Manipulations de text']
                ]
            },
            {
                title: 'Commandes',
                collapsable: false,
                children: [
                    ['wiki/commandes/archive', 'Archive'],
                    ['wiki/commandes/docker', 'Docker'],
                    ['wiki/commandes/mariadb', ' Mariadb'],
                    ['wiki/commandes/screen', 'Screen'],
                    ['wiki/commandes/ssh', 'SSH'],
                    ['wiki/commandes/vim', 'Vim']
                ]
            },
            {
                title: 'Configuration',
                collapsable: false,
                children: [
                    ['wiki/configuration/fail2ban', 'Fail2ban'],
                    ['wiki/configuration/iptables-ipset', 'Iptables & Ipset'],
                    ['wiki/configuration/ssh', 'SSH']
                ]
            },
            {
                title: 'Windows 10',
                collapsable: false,
                children: [
                    ['wiki/windows10/bloatware-trackers', 'Bloatware et trackers']
                ]
            }
        ]
    }
}