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
        logo: '/assets/logo.png',
        smoothScroll: true,
        searchPlaceholder: 'Rechercher ...',
        nav: [
            { text: 'Accueil', link: '/' },
            { text: 'Wiki', link: '/wiki/' },
            { text: 'Outils', link: 'https://app.feranet.fr' },
            { text: 'Couleurs', link: 'https://debmus.github.io/color/' },
            { text: 'Images', link: 'https://cloud.feranet.fr/s/SD3fFFYacpcczYa' },
            { text: 'Images', link: 'https://github.com/debmus/feranet.fr' }
        ],
        sidebar: [
            '/wiki/',
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