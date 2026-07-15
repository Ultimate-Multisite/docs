---
title: Tuhinga mō ngā Kaiwhakawhanake
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Tuhinga Kaiwhakawhanake

Ka whakarato tēnei aratohu ki ngā kaiwhakawhanake i ngā mea katoa e hiahiatia ana hei whakauru ki, hei whakawhānui, hei whakawhanake rānei i ngā addon mō Ultimate Multisite. Ka panoni a Ultimate Multisite i tētahi whatunga WordPress Multisite hei tūāpapa Website-as-a-Service (WaaS).

## Ngā Mea e Wātea Ana {#whats-available}

- **[REST API](./rest-api/overview)** — Ngā mahinga CRUD katoa mō ngā hinonga katoa (ngā kiritaki, ngā pae, ngā mematanga, ngā utu, ngā hua, ngā rohe) me te whakamotuhēhēnga kī API
- **[Tohutoro Hooks](./hooks/guide)** — Neke atu i te 200 action hooks me te neke atu i te 280 filter hooks mō ngā takahanga huringa-oranga me te whakarite ritenga
- **[Aratohu Whakauru](./integration-guide/)** — Ngā tauira mō te whakaurunga CRM, ngā tātaritanga, ngā kuwaha ritenga, me ngā webhooks
- **[Ngā Tauira Code](./code-examples/)** — Ngā tauira matatau mō te utu hihiri, te whakarato pae, ngā here ritenga, me te tukatuka kuwaha-maha
- **[Whanaketanga Addon](./addon-development/getting-started)** — He anga kua whakaritea mō te hanga i ngā plugin addon

## Ngā Whakaritenga {#requirements}

- Tāutanga WordPress Multisite
- PHP 7.4, teitei ake rānei
- Kua whakahohehia te plugin Ultimate Multisite

## Tāutanga Composer / Bedrock {#composer--bedrock-installation}

Kei te wātea a Ultimate Multisite i [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) hei `ultimate-multisite/ultimate-multisite`. Koinei te tikanga tāutanga e taunakitia ana mō ngā tatūnga WordPress e hāngai ana ki [Bedrock](https://roots.io/bedrock/) me ētahi atu taiao e whakahaerehia ana e Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Kua whakaingoatia anō te mōkī (v2.6.1+)
I whakaingoatia anō te mōkī Composer mai i `devstone/ultimate-multisite` ki `ultimate-multisite/ultimate-multisite` i v2.6.1. Mēnā e tohutoro ana tō `composer.json` ki te ingoa kaihoko tawhito, whakahōutia te tāurunga require, ā, whakahaerehia `composer update`.
:::

Whai muri i te tāutanga, whakahohe-whatunga i te plugin mai i te Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Rānei, mēnā kei te uta koe i te plugin hei plugin must-use mā te autoloader a Bedrock, whakamahia te tātari `wp_ultimo_skip_network_active_check` hei hipa i te kaitiaki whakahohe:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Tīmata Tere {#quick-start}

### Whakamahia te REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hono ki ngā Takahanga {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Hangaia tētahi Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Tirohia ia wāhanga mō ngā tuhinga taipitopito me ngā tauira.
