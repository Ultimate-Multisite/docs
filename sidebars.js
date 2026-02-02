/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  userGuideSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'user-guide/getting-started/ultimate-multisite-101',
        'user-guide/getting-started/basic-concepts',
        'user-guide/getting-started/what-is-wordpress-multisite',
        'user-guide/getting-started/requirements',
        'user-guide/getting-started/why-ultimate-multisite',
        'user-guide/getting-started/installing-ultimate-multisite',
        'user-guide/getting-started/how-to-install-wordpress-multisite',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'user-guide/administration/understanding-the-dashboard',
        'user-guide/administration/dashboard-overview',
        'user-guide/administration/touring-the-admin-panel',
        'user-guide/administration/managing-customers',
        'user-guide/administration/managing-sites',
        'user-guide/administration/managing-memberships',
        'user-guide/administration/managing-payments-and-invoices',
        'user-guide/administration/managing-system-emails',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'user-guide/configuration/site-templates',
        'user-guide/configuration/auto-search-and-replace-in-site-templates',
        'user-guide/configuration/checkout-forms',
        'user-guide/configuration/creating-your-first-subscription-product',
        'user-guide/configuration/creating-discount-codes',
        'user-guide/configuration/managing-shareable-links-for-plans',
        'user-guide/configuration/customizing-your-registration-form',
        'user-guide/configuration/the-registration-flow',
      ],
    },
    {
      type: 'category',
      label: 'Domain Mapping',
      items: [
        'user-guide/domain-mapping/how-to-configure-domain-mapping',
        'user-guide/domain-mapping/setting-the-sunrise-constant-on-closte',
      ],
    },
    {
      type: 'category',
      label: 'Host Integrations',
      items: [
        'user-guide/host-integrations/closte',
        'user-guide/host-integrations/cloudflare',
        'user-guide/host-integrations/cloudways',
        'user-guide/host-integrations/cpanel',
        'user-guide/host-integrations/enhance',
        'user-guide/host-integrations/gridpane',
        'user-guide/host-integrations/hestia',
        'user-guide/host-integrations/runcloud',
        'user-guide/host-integrations/serverpilot',
        'user-guide/host-integrations/wp-engine',
        'user-guide/host-integrations/wpmu-dev',
      ],
    },
    {
      type: 'category',
      label: 'Payment Gateways',
      items: [
        'user-guide/payment-gateways/stripe',
        'user-guide/payment-gateways/paypal',
        'user-guide/payment-gateways/manual-payments',
        'user-guide/payment-gateways/payfast',
        'user-guide/payment-gateways/gocardless',
        'user-guide/payment-gateways/getting-paid',
        'user-guide/payment-gateways/tax-handling',
      ],
    },
    {
      type: 'category',
      label: 'Client Management',
      items: [
        'user-guide/client-management/account-page',
        'user-guide/client-management/client-websites',
        'user-guide/client-management/upgrading-a-plan',
        'user-guide/client-management/downgrading-a-plan',
        'user-guide/client-management/canceling-a-membership',
        'user-guide/client-management/accessing-account-page-first-time',
        'user-guide/client-management/how-to-cancel-subscription',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'user-guide/integrations/woocommerce',
        'user-guide/integrations/zapier',
        'user-guide/integrations/zapier-register-account',
        'user-guide/integrations/mailchimp',
        'user-guide/integrations/affiliatewp',
        'user-guide/integrations/webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Customization',
      items: [
        'user-guide/customization/pro-theme',
        'user-guide/customization/material-wp',
        'user-guide/customization/ad-injector',
        'user-guide/customization/admin-page-creator',
        'user-guide/customization/plugin-and-theme-manager',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'user-guide/development/hooks-and-filters',
        'user-guide/development/register-api-endpoint',
        'user-guide/development/github-snippets',
        'user-guide/development/code-snippets',
        'user-guide/development/custom-development-help',
      ],
    },
    {
      type: 'category',
      label: 'Localization',
      items: [
        'user-guide/localization/translating',
        'user-guide/localization/language-selector',
        'user-guide/localization/country-list',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'user-guide/troubleshooting/sunrise-file-error',
        'user-guide/troubleshooting/known-incompatibilities',
        'user-guide/troubleshooting/how-to-get-help',
        'user-guide/troubleshooting/community',
      ],
    },
    {
      type: 'category',
      label: 'Migration',
      items: [
        'user-guide/migration/migrating-from-v1',
        'user-guide/migration/site-exporter',
      ],
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      items: [
        'user-guide/miscellaneous/sending-emails-and-broadcasts',
        'user-guide/miscellaneous/frequently-asked-questions',
      ],
    },
  ],

  developerSidebar: [
    'developer/index',
    {
      type: 'category',
      label: 'Hooks Reference',
      items: [
        {
          type: 'autogenerated',
          dirName: 'developer/hooks',
        },
      ],
    },
    {
      type: 'category',
      label: 'REST API',
      items: [
        'developer/rest-api/overview',
      ],
    },
    {
      type: 'category',
      label: 'Integration Guide',
      items: [
        'developer/integration-guide/index',
        'developer/integration-guide/custom-gateway',
        'developer/integration-guide/webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Code Examples',
      items: [
        'developer/code-examples/index',
      ],
    },
    {
      type: 'category',
      label: 'Addon Development',
      items: [
        'developer/addon-development/getting-started',
      ],
    },
  ],

  addonsSidebar: [
    'addons/index',
    {
      type: 'category',
      label: 'WooCommerce Integration',
      items: [{type: 'autogenerated', dirName: 'addons/woocommerce'}],
    },
    {
      type: 'category',
      label: 'Site Exporter',
      items: [{type: 'autogenerated', dirName: 'addons/site-exporter'}],
    },
    {
      type: 'category',
      label: 'AffiliateWP',
      items: [{type: 'autogenerated', dirName: 'addons/affiliatewp'}],
    },
    {
      type: 'category',
      label: 'AI Site Builder',
      items: [{type: 'autogenerated', dirName: 'addons/ai-site-builder'}],
    },
    {
      type: 'category',
      label: 'Analytics',
      items: [{type: 'autogenerated', dirName: 'addons/analytics'}],
    },
    {
      type: 'category',
      label: 'Captcha',
      items: [{type: 'autogenerated', dirName: 'addons/captcha'}],
    },
    {
      type: 'category',
      label: 'Chuck Norris Facts',
      items: [{type: 'autogenerated', dirName: 'addons/chuck-norris-facts'}],
    },
    {
      type: 'category',
      label: 'Content Sync',
      items: [{type: 'autogenerated', dirName: 'addons/content-sync'}],
    },
    {
      type: 'category',
      label: 'Domain Seller',
      items: [{type: 'autogenerated', dirName: 'addons/domain-seller'}],
    },
    {
      type: 'category',
      label: 'Fluent Forms',
      items: [{type: 'autogenerated', dirName: 'addons/fluent-forms'}],
    },
    {
      type: 'category',
      label: 'GoCardless',
      items: [{type: 'autogenerated', dirName: 'addons/gocardless'}],
    },
    {
      type: 'category',
      label: 'Gravity Forms',
      items: [{type: 'autogenerated', dirName: 'addons/gravity-forms'}],
    },
    {
      type: 'category',
      label: 'Language Selector',
      items: [{type: 'autogenerated', dirName: 'addons/language-selector'}],
    },
    {
      type: 'category',
      label: 'Loco Translate',
      items: [{type: 'autogenerated', dirName: 'addons/loco-translate'}],
    },
    {
      type: 'category',
      label: 'Mailchimp',
      items: [{type: 'autogenerated', dirName: 'addons/mailchimp'}],
    },
    {
      type: 'category',
      label: 'Mailster',
      items: [{type: 'autogenerated', dirName: 'addons/mailster'}],
    },
    {
      type: 'category',
      label: 'Metered Plans',
      items: [{type: 'autogenerated', dirName: 'addons/metered-plans'}],
    },
    {
      type: 'category',
      label: 'Multi-Network',
      items: [{type: 'autogenerated', dirName: 'addons/multinetwork'}],
    },
    {
      type: 'category',
      label: 'Multi-Tenancy',
      items: [{type: 'autogenerated', dirName: 'addons/multi-tenancy'}],
    },
    {
      type: 'category',
      label: 'PayFast',
      items: [{type: 'autogenerated', dirName: 'addons/payfast'}],
    },
    {
      type: 'category',
      label: 'Plugin & Theme Manager',
      items: [{type: 'autogenerated', dirName: 'addons/plugin-and-theme-manager'}],
    },
    {
      type: 'category',
      label: 'Support Agents',
      items: [{type: 'autogenerated', dirName: 'addons/support-agents'}],
    },
    {
      type: 'category',
      label: 'Support Tickets',
      items: [{type: 'autogenerated', dirName: 'addons/support-tickets'}],
    },
    {
      type: 'category',
      label: 'VAT',
      items: [{type: 'autogenerated', dirName: 'addons/vat'}],
    },
    {
      type: 'category',
      label: 'Admin Page Creator',
      items: [{type: 'autogenerated', dirName: 'addons/admin-page-creator'}],
    },
    {
      type: 'category',
      label: 'Addon Template',
      items: [{type: 'autogenerated', dirName: 'addons/addon-template'}],
    },
    {
      type: 'category',
      label: 'Tutor Multisite Compatibility',
      items: [{type: 'autogenerated', dirName: 'addons/tutor-multisite-compatibility'}],
    },
    {
      type: 'category',
      label: 'Material WP',
      items: [{type: 'autogenerated', dirName: 'addons/material-wp'}],
    },
  ],
};

module.exports = sidebars;
