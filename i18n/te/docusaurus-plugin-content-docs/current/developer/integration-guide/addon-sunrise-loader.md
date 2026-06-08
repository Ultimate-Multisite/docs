---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0, add-ons కోసం మరియు కస్టమ్ MU-plugin ఇంటిగ్రేషన్స్ కోసం ఒక sunrise extension loader ని జోడిస్తుంది. ఈ ఇంటిగ్రేషన్స్ WordPress sunrise bootstrapping సమయంలో, `wp-content/sunrise.php` ఫైల్‌ను ఎడిట్ చేయకుండా రన్ అవ్వాల్సి ఉంటుంది.

## ఎప్పుడు ఉపయోగించాలి

మీ ఇంటిగ్రేషన్ సాధారణ ప్లగిన్‌లు లోడ్ అవ్వకముందే రన్ అవ్వాల్సి వస్తే, అంటే కస్టమ్ డొమైన్ రూటింగ్, హోస్ట్-నిర్దిష్ట రిక్వెస్ట్ హ్యాండ్లింగ్, లేదా early network bootstrap adjustments వంటి సందర్భాలలో, మీరు sunrise extension ని ఉపయోగించాలి.

సాధారణ ఇంటిగ్రేషన్స్ కోసం, మీరు సాధారణ WordPress plugins, MU-plugins, మరియు డాక్యుమెంట్ చేయబడిన Ultimate Multisite hooks ని ఉపయోగించడం మంచిది. Sunrise కోడ్ చాలా త్వరగా రన్ అవుతుంది కాబట్టి, అది చిన్నగా, రక్షణగా (defensive), మరియు ఇతర డిపెండెన్సీలు లేని విధంగా ఉండాలి.

## ఫైల్ పేరు పెట్టే విధానం (File naming convention)

`ultimate-multisite-` తో మొదలయ్యే పేరు గల addon డైరెక్టరీలో `sunrise.php` అనే PHP ఫైల్‌ను సృష్టించండి:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ఈ లోడర్ ఈ pattern కోసం plugins డైరెక్టరీని స్కాన్ చేస్తుంది:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

మ్యాచ్ అయిన ఫైల్స్ addon path ప్రకారం అక్షర క్రమంలో (alphabetical order) లోడ్ చేయబడతాయి.

## ఫైల్‌ను ఎక్కడ ఉంచాలి

sunrise behavior ఉన్న addon యొక్క root డైరెక్టరీలో ఈ ఫైల్‌ను ఉంచండి:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

ఈ స్కాన్ `WP_CONTENT_DIR` కి సంబంధించి రిజాల్వ్ అవుతుంది, ప్రస్తుత `WP_PLUGIN_DIR` విలువకు కాదు. multi-tenancy లేదా ఇతర early bootstrap కోడ్ sunrise సమయంలో plugin directory constants ని మార్చినప్పుడు కూడా ఇది డిస్కవరీని స్థిరంగా ఉంచుతుంది.

దయచేసి నేరుగా ఉత్పత్తి చేయబడిన `wp-content/sunrise.php` ఫైల్‌ను ఎడిట్ చేయకండి. Ultimate Multisite ఇన్స్టాల్ చేసి, అప్‌డేట్ చేసే core sunrise ఫైల్‌ను forking చేయకుండా, కస్టమ్ కోడ్‌ను sunrise behavior ను extend చేయడానికి ఈ లోడర్ అనుమతిస్తుంది.

## అందుబాటులో ఉన్న Hooks మరియు Filters

Addon sunrise ఫైల్స్ Ultimate Multisite domain mapping లోడ్ అయిన తర్వాత మరియు WordPress `ms_loaded` ను కాల్ చేయడానికి ముందు రన్ అవుతాయి. ఈ సమయంలో ఒక sunrise ఫైల్ చేయగలిగేవి:

- `$current_site` మరియు `$current_blog` ను చదవడం లేదా ఓవర్‌రైడ్ చేయడం;
- డేటాబేస్ కాన్ఫిగరేషన్ లోడ్ అయిన తర్వాత `$wpdb` ని యాక్సెస్ చేయడం;
- అవసరమైనప్పుడు `BLOG_ID_CURRENT_SITE` వంటి sunrise-time constants ను నిర్వచించడం;
- multi-tenancy ఇంటిగ్రేషన్స్ ద్వారా ఉపయోగించే రూటింగ్ స్టేట్ తో సహా Ultimate Multisite sunrise helper state ను చదవడం.

Ultimate Multisite తన sunrise loader పూర్తయిన తర్వాత `wu_sunrise_loaded` ను కాల్ చేస్తుంది. sunrise bootstrap పూర్తయిన తర్వాత కూడా రన్ అవ్వాల్సిన కోడ్ కోసం, కానీ అది sunrise lifecycle కి చెందినదై ఉండాలి, ఆ action ని ఉపయోగించండి.

sunrise phase లో ఇప్పటికే లోడ్ అయిన ఫంక్షన్లను మాత్రమే కాల్ చేయండి. డేటాబేస్-భారీ పని (database-heavy work), template rendering, HTTP requests, మరియు సాధారణ plugin load order పూర్తయినట్లు ఊహించే కోడ్‌ను నివారించండి.

## కనిష్ట ఉదాహరణ (Minimal example)

```php
<?php
/**
 * A custom host integration sunrise extension.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

ఫైల్‌ను డిప్లాయ్ చేసిన తర్వాత, రెండు paths కూడా సరిగ్గా bootstrap అవుతున్నాయో లేదో నిర్ధారించడానికి ఒక mapped domain మరియు ఒక unmapped main-site URL ని లోడ్ చేయండి.
