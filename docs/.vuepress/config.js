const { description } = require('../../package')
const navs = require('./navBar')
const headers = require('./sidebar')
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ngto个人笔记',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  "base": '/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: `./favicon.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '主页', link: '/'
      },
      {
        text: '笔记', link: '/note/'
      },
      {
        text: '工具', link: '/tool/'
      },
      {
        "text": "Html",
        "link": "/html/"
      },
      {
        "text": "JavaScript",
        "link": "/javascript/"
      },
      {
        "text": "Css",
        "link": "/css/"
      },
      {
        "text": "Webpack",
        "link": "/webpack/"
      },
      {
        "text": "Docker",
        "link": "/docker/"
      },
      {
        "text": "Git",
        "link": "/git/"
      },
      {
        "text": "Http",
        "link": "/http/"
      }
    ],
    sidebar: { ...headers }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }
  ]
}
