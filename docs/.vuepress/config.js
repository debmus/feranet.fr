const moment = require('moment');

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
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            },
        ],
    ],
    themeConfig: {
        logo: '/assets/logo.png',
        smoothScroll: true,
        lastUpdated: 'Dernière modification',
        searchPlaceholder: 'Rechercher ...',
        repo: 'debmus/feranet.fr',
        docsRepo: 'debmus/feranet.fr',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Editer sur GitHub',
        nav: [
            { text: 'Accueil', link: '/' },
            { text: 'Wiki', link: '/wiki/' },
            { text: 'Outils', link: '/outils/' },
            { text: 'Couleurs', link: 'https://debmus.github.io/color/' },
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