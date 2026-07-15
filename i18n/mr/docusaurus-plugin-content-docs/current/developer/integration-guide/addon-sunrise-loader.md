---
title: अॅडऑन सूर्योदय फाइल लोडर
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 मध्ये add-ons आणि custom MU-plugin integrations साठी एक sunrise extension loader जोडला गेला आहे. ज्या add-ons ला WordPress sunrise bootstrapping दरम्यान चालण्याची गरज आहे, पण त्यासाठी जनरेट केलेल्या `wp-content/sunrise.php` फाइलमध्ये बदल करण्याची गरज नाही.

## कधी वापरायचा {#when-to-use-it}

जेव्हा तुमच्या integration ला नियमित प्लगइन्स लोड होण्यापूर्वी चालण्याची गरज असेल, तेव्हा sunrise extension वापरा. उदाहरणार्थ, custom domain routing, host-specific request handling, किंवा early network bootstrap adjustments.

सामान्य integrations साठी, नियमित WordPress plugins, MU-plugins, आणि document केलेल्या Ultimate Multisite hooks चा वापर करणे अधिक चांगले आहे. Sunrise कोड खूप लवकर चालतो आणि तो लहान, सुरक्षित (defensive), आणि कोणत्याही बाह्य अवलंबित्व (dependency-free) नसलेला असावा.

## फाइलचे नाव निश्चित करण्याची पद्धत (File naming convention) {#file-naming-convention}

एका add-on directory मध्ये `sunrise.php` नावाच्या PHP फाइलची निर्मिती करा, ज्याचे नाव `ultimate-multisite-` ने सुरू होते:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

हा loader या पॅटर्नसाठी plugins directory स्कॅन करतो:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

जुळणारे (Matching) फाइल्स add-on path नुसार वर्णक्रमानुसार (alphabetical order) लोड केले जातात.

## फाइल कुठे ठेवायची (Where to place the file) {#where-to-place-the-file}

ही फाइल त्या add-on च्या रूट directory मध्ये ठेवा, ज्यामध्ये sunrise चे वर्तन (behaviour) आहे:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

हे स्कॅनिंग `WP_CONTENT_DIR` च्या सापेक्ष (relative) असते, सध्याच्या `WP_PLUGIN_DIR` मूल्यावर नाही. यामुळे, जेव्हा multi-tenancy किंवा इतर early bootstrap कोड sunrise दरम्यान plugin directory constants बदलतात, तेव्हाही ही शोध प्रक्रिया स्थिर राहते.

जनरेट केलेली `wp-content/sunrise.php` फाइल थेट संपादित (edit) करू नका. हा loader कस्टम कोडला sunrise चे वर्तन वाढवण्याची (extend) परवानगी देतो, त्यासाठी Ultimate Multisite ने स्थापित आणि अपडेट केलेल्या core sunrise फाइलमध्ये बदल करण्याची गरज पडत नाही.

## उपलब्ध hooks आणि filters {#hooks-and-filters-available}

Addon sunrise फाइल्स Ultimate Multisite domain mapping लोड झाल्यानंतर आणि WordPress ने `ms_loaded` फायर करण्यापूर्वी चालतात. या टप्प्यावर एक sunrise फाइल खालील गोष्टी करू शकते:

- `$current_site` आणि `$current_blog` वाचणे किंवा त्यांना ओव्हरराईड करणे;
- डेटाबेस कॉन्फिगरेशन लोड झाल्यानंतर `$wpdb` ॲक्सेस करणे;
- गरजेनुसार sunrise-वेळेचे constants परिभाषित करणे, जसे की `BLOG_ID_CURRENT_SITE`;
- Ultimate Multisite sunrise helper state वाचणे, ज्यामध्ये multi-tenancy integrations वापरत असलेले routing state समाविष्ट आहे.

Ultimate Multisite, त्याच्या sunrise loader पूर्ण झाल्यावर `wu_sunrise_loaded` फायर करते. ज्या कोडला sunrise bootstrap पूर्ण झाल्यानंतरही चालण्याची गरज आहे, पण तो अजूनही sunrise lifecycle चा भाग आहे, त्यासाठी या action चा वापर करा.

केवळ त्या फंक्शन्सला कॉल करा जे sunrise टप्प्यात आधीच लोड झाले आहेत. डेटाबेसशी संबंधित जास्त काम (database-heavy work), template rendering, HTTP requests, आणि असा कोड टाळा जो सामान्य plugin load order पूर्ण झाल्याचे गृहीत धरतो.

## किमान उदाहरण (Minimal example) {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

फाइल तैनात (deploy) केल्यानंतर, दोन्ही मार्ग (paths) योग्यरित्या bootstrap होत आहेत की नाही हे तपासण्यासाठी एक mapped domain आणि एक unmapped main-site URL लोड करा.
