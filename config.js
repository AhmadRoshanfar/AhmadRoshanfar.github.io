const config = {
  gatsby: {
    pathPrefix: '/AhmadRoshanfar.github.io',
    siteUrl: 'https://ahmadroshanfar.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://www.iconfinder.com/icons/653262/bulb_light_electric_energy_idea_lamp_thought_icon',
    logoLink: 'https://ahmadroshanfar.github.io/',
    title:
      "<a href='https://github.com/ahmadroshanfar'><img class='img-responsive' src='https://www.iconfinder.com/icons/653262/bulb_light_electric_energy_idea_lamp_thought_icon' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/ahmadroshanfar/AhmadRoshanfar.github.io',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/ahmadroshanfar" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: 'github', link: 'github.com/ahmadroshanfar' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Github', link: 'https://github.com/AhmadRoshanfar' }],
    frontline: false,
    ignoreIndex: true,
    title: '<h4> Embedded System Projects</h4>',
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
