// @ts-check
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ultimate Multisite Documentation',
  tagline: 'Transform WordPress Multisite into a Website as a Service platform',
  favicon: 'img/favicon.ico',
  url: 'https://ultimatemultisite.com',
  baseUrl: '/docs/',
  organizationName: 'Ultimate-Multisite',
  projectName: 'ultimate-multisite',
  onBrokenLinks: 'warn',
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'af', 'am', 'ar', 'as', 'az', 'azb', 'be', 'bg', 'bn', 'bs',
      'ca', 'ceb', 'ckb', 'cs', 'cy', 'da', 'de', 'el', 'eo', 'es',
      'et', 'eu', 'fa', 'fi', 'fil', 'fr', 'ga', 'gd', 'gl', 'gu',
      'ha', 'he', 'hi', 'hmn', 'hr', 'ht', 'hu', 'hy', 'id', 'ig',
      'is', 'it', 'ja', 'jv', 'ka', 'kk', 'km', 'kn', 'ko', 'ku',
      'ky', 'la', 'lb', 'lo', 'lt', 'lv', 'mg', 'mi', 'mk', 'ml',
      'mn', 'mr', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'or',
      'pa', 'pl', 'ps', 'pt', 'pt-BR', 'ro', 'ru', 'rw', 'sd', 'si',
      'sk', 'sl', 'sn', 'snd', 'so', 'sq', 'sr', 'st', 'su', 'sv',
      'sw', 'ta', 'te', 'tg', 'th', 'tk', 'tl', 'tr', 'tt', 'ug',
      'uk', 'ur', 'uz', 'vi', 'xh', 'yi', 'yo', 'zh-Hans', 'zh-Hant',
      'zu',
    ],
    localeConfigs: {
      ar: {label: 'العربية', direction: 'rtl'},
      he: {label: 'עברית', direction: 'rtl'},
      fa: {label: 'فارسی', direction: 'rtl'},
      ur: {label: 'اردو', direction: 'rtl'},
      ckb: {label: 'کوردی', direction: 'rtl'},
      ps: {label: 'پښتو', direction: 'rtl'},
      snd: {label: 'سنڌي', direction: 'rtl'},
      ug: {label: 'ئۇيغۇرچە', direction: 'rtl'},
      azb: {label: 'تۆرکجه', direction: 'rtl'},
      yi: {label: 'ייִדיש', direction: 'rtl'},
      sd: {label: 'سنڌي', direction: 'rtl'},
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Ultimate Multisite',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userGuideSidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developerSidebar',
            position: 'left',
            label: 'Developer',
          },
          {
            type: 'docSidebar',
            sidebarId: 'addonsSidebar',
            position: 'left',
            label: 'Addons',
          },
          {
            href: 'https://ultimatemultisite.com',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/Ultimate-Multisite/ultimate-multisite',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'User Guide', to: '/user-guide/getting-started/ultimate-multisite-101' },
              { label: 'Developer Docs', to: '/developer' },
              { label: 'Addons', to: '/addons' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub Discussions', href: 'https://github.com/Ultimate-Multisite/ultimate-multisite/discussions' },
              { label: 'WordPress.org', href: 'https://wordpress.org/plugins/ultimate-multisite/' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Website', href: 'https://ultimatemultisite.com' },
              { label: 'GitHub', href: 'https://github.com/Ultimate-Multisite/ultimate-multisite' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ultimate Multisite.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'bash'],
      },
    }),
};

module.exports = config;
