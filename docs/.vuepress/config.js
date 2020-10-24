const moment = require('moment');

module.exports = {
    locales: {
        '/': {
            lang: 'fr-FR',
            title: "Feranet",
            description: "Wiki & Tool",
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
        logo: '/assets/favicon.ico',
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
            { text: 'Wiki', link: '/' }
        ],
        sidebar: [{
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