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
            { text: 'Wiki', link: '/' },
            { text: 'Outils', link: 'https://app.feranet.fr' },
            { text: 'Images', link: 'https://cloud.feranet.fr/s/TWYWF6KrpdfXCf9' },
            { text: 'GitHub', link: 'https://github.com/debmus/feranet.fr' }
        ],
        sidebar: [
            ['/', 'Wiki'],
            {
                title: 'Bash',
                collapsable: false,
                children: [
                    ['bash/conditions', 'Les conditions'],
                    ['bash/manipulations', 'Manipulations de text']
                ]
            },
            {
                title: 'Commandes',
                collapsable: false,
                children: [
                    ['commandes/archive', 'Archive'],
                    ['commandes/docker', 'Docker'],
                    ['commandes/mariadb', ' Mariadb'],
                    ['commandes/screen', 'Screen'],
                    ['commandes/ssh', 'SSH'],
                    ['commandes/vim', 'Vim']
                ]
            },
            {
                title: 'Configuration',
                collapsable: false,
                children: [
                    ['configuration/fail2ban', 'Fail2ban'],
                    ['configuration/iptables-ipset', 'Iptables & Ipset'],
                    ['configuration/ssh', 'SSH']
                ]
            },
            {
                title: 'Windows 10',
                collapsable: false,
                children: [
                    ['windows10/bloatware-trackers', 'Bloatware et trackers']
                ]
            }
        ]
    }
}