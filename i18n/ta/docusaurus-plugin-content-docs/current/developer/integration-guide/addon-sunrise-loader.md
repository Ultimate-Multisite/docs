---
title: துணைப் பொருள் சூரிய உதயம் கோப்பு ஏற்றப்பான்
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0, add-ons மற்றும் தனிப்பயன் MU-plugin ஒருங்கிணைப்புகளுக்காக ஒரு sunrise extension loader-ஐ சேர்க்கிறது. இந்த ஒருங்கிணைப்புகள், உருவாக்கப்பட்ட `wp-content/sunrise.php` கோப்பைத் திருத்தாமல், WordPress sunrise bootstrapping செயல்பாட்டின் போது இயங்க வேண்டியிருக்கும்.

## எப்போது பயன்படுத்த வேண்டும்

உங்கள் ஒருங்கிணைப்பு, வழக்கமான plugins ஏற்றப்படுவதற்கு முன்பே இயங்க வேண்டியிருந்தால், அதாவது தனிப்பயன் domain routing, host-specific request handling, அல்லது ஆரம்ப network bootstrap மாற்றங்கள் தேவைப்பட்டால், ஒரு sunrise extension-ஐப் பயன்படுத்தவும்.

சாதாரண ஒருங்கிணைப்புகளுக்கு, வழக்கமான WordPress plugins, MU-plugins மற்றும் ஆவணப்படுத்தப்பட்ட Ultimate Multisite hooks-ஐப் பயன்படுத்துவதே சிறந்தது. Sunrise code மிக ஆரம்ப கட்டத்தில் இயங்குவதால், அது சிறியதாகவும், பாதுகாப்பாகவும் (defensive), மற்றும் எந்த சார்புகளும் (dependency-free) இல்லாமல் இருக்க வேண்டும்.

## கோப்பு பெயரிடும் முறை (File naming convention)

`ultimate-multisite-` என்ற பெயரில் தொடங்கும் ஒரு addon directory-க்குள் `sunrise.php` என்ற பெயரில் ஒரு PHP கோப்பை உருவாக்கவும்:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

இந்த loader, பின்வரும் வடிவத்தில் உள்ள addon directory-களில் உள்ள plugins directory-ஐ ஸ்கேன் செய்யும்:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

பொருத்தமான கோப்புகள், addon path-ன் அடிப்படையில் எழுத்துமுறை வரிசையில் (alphabetical order) ஏற்றப்படும்.

## கோப்பை எங்கு வைக்க வேண்டும்

sunrise செயல்பாட்டைக் கொண்ட addon-ன் root directory-யில் இந்த கோப்பை வைக்கவும்:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

இந்த ஸ்கேன், `WP_CONTENT_DIR`-ஐப் பொறுத்து தீர்மானிக்கப்படுகிறது, `WP_PLUGIN_DIR`-ன் தற்போதைய மதிப்பை அல்ல. multi-tenancy அல்லது பிற ஆரம்ப bootstrap code ஆகியவை sunrise செயல்பாட்டின் போது plugin directory constants-ஐ மாற்றும்போது, இது கண்டுபிடிப்பை (discovery) நிலையாக வைக்கிறது.

உருவாக்கப்பட்ட `wp-content/sunrise.php` கோப்பை நேரடியாகத் திருத்த வேண்டாம். Ultimate Multisite நிறுவி மற்றும் புதுப்பிக்கும் core sunrise கோப்பை fork செய்யாமல், custom code-க்கு sunrise செயல்பாட்டை நீட்டிக்க இந்த loader அனுமதிக்கிறது.

## கிடைக்கும் Hooks மற்றும் Filters

Addon sunrise கோப்புகள், Ultimate Multisite domain mapping ஏற்றப்பட்ட பின்னரும், WordPress `ms_loaded` ஐ வெளியிடுவதற்கு முன்னரும் இயங்கும். இந்த நேரத்தில் ஒரு sunrise file பின்வருவனவற்றைச் செய்ய முடியும்:

- `$current_site` மற்றும் `$current_blog`-ஐ படிக்கலாம் அல்லது மாற்றியமைக்கலாம்;
- தரவுத்தள உள்ளமைவு (database configuration) ஏற்றப்பட்ட பிறகு `$wpdb`-ஐ அணுகலாம்;
- தேவைப்படும்போது `BLOG_ID_CURRENT_SITE` போன்ற sunrise-நேர மாறிலிகளை (constants) வரையறுக்கலாம்;
- multi-tenancy ஒருங்கிணைப்புகளால் பயன்படுத்தப்படும் routing state உட்பட, Ultimate Multisite sunrise helper state-ஐப் படிக்கலாம்.

Ultimate Multisite அதன் sunrise loader முடித்த பிறகு `wu_sunrise_loaded` என்ற action-ஐ வெளியிடுகிறது. sunrise bootstrap முடிந்த பிறகும், ஆனால் இன்னும் sunrise life cycle-ல் இருக்க வேண்டிய code-க்கு அந்த action-ஐப் பயன்படுத்தவும்.

sunrise கட்டத்தில் ஏற்கனவே ஏற்றப்பட்ட செயல்பாடுகளை (functions) மட்டுமே அழைக்கவும். தரவுத்தளத்தை அதிகம் பயன்படுத்தும் வேலைகள் (database-heavy work), template rendering, HTTP requests, மற்றும் சாதாரண plugin load order முடிந்துவிட்டது என்று கருதும் code ஆகியவற்றைத் தவிர்க்கவும்.

## குறைந்தபட்ச உதாரணம் (Minimal example)

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

கோப்பை deploy செய்த பிறகு, இரண்டு பாதைகளும் (paths) சரியாக bootstrap ஆகின்றன என்பதை உறுதிப்படுத்த, ஒரு mapped domain மற்றும் ஒரு unmapped main-site URL ஆகிய இரண்டையும் ஏற்றவும்.
