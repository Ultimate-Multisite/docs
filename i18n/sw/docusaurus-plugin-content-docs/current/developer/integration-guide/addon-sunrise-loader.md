---
title: Kiambatisho Kipakaji Faili wa Dhoho
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Msaidizi wa Kufungua Faili ya Sunrise ya Addon

Ultimate Multisite 2.8.0 inaongeza msaidizi wa kufungua (loader) wa 'sunrise' kwa ajili ya add-ons na viunganisho vya custom MU-plugin ambavyo vinahitaji kuendesha wakati wa mchakato wa kuanzisha (bootstrapping) wa WordPress sunrise bila kuhariri faili ya `wp-content/sunrise.php` iliyoundwa.

## Lini kutatumia

Tumia msaidizi wa sunrise wakati viunganisho vyako vinahitaji kuendesha kabla ya plugins za kawaida kuwekwa, kwa mfano, upangaji wa njia wa nyanja maalum (custom domain routing), kushughulikia maombi yanayotokana na host maalum, au marekebisho ya awali ya mtandao.

Kwa viunganisho vya kawaida, ni bora kutumia plugins za kawaida za WordPress, MU-plugins, na hooks zilizodokumentishwa za Ultimate Multisite. Kodi ya sunrise inakimbia mapema sana na inapaswa kuwa ndogo, inayojitetea (defensive), na haihitaji kutegemea kitu kingine (dependency-free).

## Kanuni ya kutii jina la faili

Uundeni faili ya PHP yenye jina `sunrise.php` ndani ya saraka ya addon ambayo jina lake linanuanza na `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Msaidizi hufanya ukaguzi (scans) kwenye saraka ya plugins kwa kutumia mfumo huu:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Faili zinazofanana hufunguliwa kwa mpangilio wa alfabeti kulingana na njia ya addon.

## Wapi pa kuweka faili

Weka faili hiyo katika saraka kuu ya addon inayomiliki tabia ya sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Ukaguzi huu unapatikana kulingana na `WP_CONTENT_DIR`, si thamani ya sasa ya `WP_PLUGIN_DIR`. Hii inahakikisha utambuzi unabaki thabiti wakati multi-tenancy au kodi nyingine ya kuanzisha inabadilisha vigezo vya saraka ya plugins wakati wa sunrise.

Usihariri moja kwa moja faili iliyoundwa `wp-content/sunrise.php`. Msaidizi hufanya kazi ya kuruhusu kodi ya custom kuongeza tabia ya sunrise bila kuunda 'fork' (kuhariri nakala) ya faili kuu ya sunrise ambayo Ultimate Multisite inaifunga na kuiboresha.

## Hooks na filters zinazopatikana

Faili za sunrise za addon hufanya kazi baada ya upangaji wa nyanja (domain mapping) wa Ultimate Multisite kuwekwa na kabla ya WordPress kuendesha `ms_loaded`. Katika hatua hii, faili ya sunrise inaweza:

- kusoma au kubadilisha `$current_site` na `$current_blog`;
- kufikia `$wpdb` baada ya usanidi wa database kuwekwa;
- kufafanua vigezo vya wakati wa sunrise kama vile `BLOG_ID_CURRENT_SITE` inapohitajika;
- kusoma hali ya msaidizi wa sunrise wa Ultimate Multisite, ikiwa ni pamoja na hali ya upangaji wa njia inayotumika na viunganisho vya multi-tenancy.

Ultimate Multisite inatoa `wu_sunrise_loaded` baada ya msaidizi wake wa sunrise kumaliza. Tumia kitendo (action) hicho kwa kodi ambayo inapaswa kuendesha baada ya mchakato wa kuanzisha sunrise kukamilika lakini bado inahusishwa na mzunguko wa maisha wa sunrise.

Zitumie tu kazi (functions) ambazo tayari zimewekwa katika awamu ya sunrise. Epuka kazi nyingi zinazohusiana na database, kuonyesha template, maombi ya HTTP, na kodi inayodhani kuwa mpangilio wa kawaida wa kuweka plugins umekamilika.

## Mfano wa kiwango cha chini

```php
<?php
/**
 * Sunrise extension kwa ajili ya viunganisho vya host maalum.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Rekebisha upangaji wa njia au vigezo mapema kabla ya ms_loaded.
}
```

Baada ya kuweka faili, fungua nyanja iliyopangwa (mapped domain) na URL ya tovuti kuu isiyopangwa (unmapped main-site URL) ili kuthibitisha kwamba njia zote mbili bado zinaanza vizuri (bootstrap correctly).
