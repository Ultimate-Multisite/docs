---
title: Akwụkwọ ntuziaka Onye nrụpụta
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Akwụkwọ Nduzi Ndị Mmepe {#developer-documentation}

Nduzi a na-enye ndị mmepe ihe niile achọrọ iji jikọta na Ultimate Multisite, gbasaa ya, ma ọ bụ mepụta mgbakwunye maka ya. Ultimate Multisite na-agbanwe netwọkụ WordPress Multisite ka ọ bụrụ ikpo okwu Website-as-a-Service (WaaS).

## Ihe Dị {#whats-available}

- **[REST API](./rest-api/overview)** — Ọrụ CRUD zuru ezu maka ihe niile (ndị ahịa, saịtị, otu ndị otu, ịkwụ ụgwọ, ngwaahịa, ngalaba) nwere nkwenye API key
- **[Ntụaka Hooks](./hooks/guide)** — 200+ action hooks na 280+ filter hooks maka ihe omume ndụmọdụ na nhazi omenala
- **[Nduzi Njikọ](./integration-guide/)** — Ihe atụ maka njikọ CRM, analytics, ụzọ ịkwụ ụgwọ omenala, na webhooks
- **[Ihe Atụ Koodu](./code-examples/)** — Ụkpụrụ dị elu maka ọnụahịa na-agbanwe agbanwe, ịkwadebe saịtị, mmachi omenala, na nhazi ọtụtụ ụzọ ịkwụ ụgwọ
- **[Mmepe Mgbakwunye](./addon-development/getting-started)** — Framework nwere usoro maka iwulite plugin mgbakwunye

## Ihe Achọrọ {#requirements}

- Nwụnye WordPress Multisite
- PHP 7.4 ma ọ bụ karịa
- Ultimate Multisite plugin agbalitela

## Nwụnye Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite dị na [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) dịka `ultimate-multisite/ultimate-multisite`. Nke a bụ usoro nwụnye a tụrụ aro maka nhazi WordPress dabere na [Bedrock](https://roots.io/bedrock/) na gburugburu ndị ọzọ Composer na-achịkwa.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note A kpọgharịrị ngwugwu aha (v2.6.1+)
A kpọgharịrị ngwugwu Composer site na `devstone/ultimate-multisite` gaa na `ultimate-multisite/ultimate-multisite` na v2.6.1. Ọ bụrụ na `composer.json` gị na-ezo aka na aha vendor ochie, melite require entry ahụ ma mee `composer update`.
:::

Mgbe nwụnye gasịrị, mee ka plugin rụọ ọrụ n'ogo netwọkụ site na Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Ma ọ bụ, ọ bụrụ na ị na-ebunye plugin ahụ dịka must-use plugin site na autoloader nke Bedrock, jiri filter `wp_ultimo_skip_network_active_check` gafee nche activation:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Mbido Ngwa Ngwa {#quick-start}

### Jiri REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Tinye Hook na Ihe Omume {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Wulite Mgbakwunye {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Lee ngalaba ọ bụla maka akwụkwọ nduzi na ihe atụ zuru ezu.
