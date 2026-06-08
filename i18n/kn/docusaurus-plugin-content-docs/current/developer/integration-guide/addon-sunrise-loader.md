---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0, add-ons ಮತ್ತು ಕಸ್ಟಮ್ MU-plugin integrationಗಳಿಗೆ ಒಂದು sunrise extension loader ಅನ್ನು ಸೇರಿಸಿದೆ. ಈ ಲೋಡರ್ ಅನ್ನು ಬಳಸಿಕೊಂಡು, `wp-content/sunrise.php` ಫೈಲ್ ಅನ್ನು ಎಡಿಟ್ ಮಾಡದೆ, WordPress sunrise bootstrapping ಸಮಯದಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಅಡ್-ಆನ್‌ಗಳು ಮತ್ತು ಕಸ್ಟಮ್ MU-plugin integrationಗಳನ್ನು ನೀವು ನಿರ್ವಹಿಸಬಹುದು.

## ಇದನ್ನು ಯಾವಾಗ ಬಳಸಬೇಕು

ನಿಮ್ಮ integration ಅನ್ನು ಸಾಮಾನ್ಯ plugins ಲೋಡ್ ಆಗುವ ಮೊದಲೇ ರನ್ ಮಾಡಬೇಕಿದ್ದರೆ, ಉದಾಹರಣೆಗೆ ಕಸ್ಟಮ್ ಡೊಮೈನ್ routing, хоಸ್ಟ್-ನಿರ್ದಿಷ್ಟ request handling, ಅಥವಾ ಆರಂಭಿಕ network bootstrap ಹೊಂದಾಣಿಕೆಗಳಿಗಾಗಿ ನೀವು sunrise extension ಅನ್ನು ಬಳಸಬೇಕು.

ಸಾಮಾನ್ಯ integrationಗಳಿಗಾಗಿ, ನೀವು regular WordPress plugins, MU-plugins, ಮತ್ತು document ಮಾಡಿದ Ultimate Multisite hooks ಅನ್ನು ಬಳಸಲು ಆದ್ಯತೆ ನೀಡಿ. Sunrise code ಬಹಳ ಆರಂಭಿಕ ಹಂತದಲ್ಲಿ ರನ್ ಆಗುತ್ತದೆ ಮತ್ತು ಅದು ಚಿಕ್ಕದಾಗಿ, ರಕ್ಷಣಾತ್ಮಕವಾಗಿ (defensive), ಮತ್ತು ಯಾವುದೇ external dependency ಇಲ್ಲದಂತಿರಬೇಕು.

## ಫೈಲ್ ಹೆಸರಿಸುವ ನಿಯಮ (File naming convention)

`ultimate-multisite-` ನಿಂದ ಪ್ರಾರಂಭವಾಗುವ ಹೆಸರಿನೊಂದಿಗೆ ಒಂದು addon directory ನಲ್ಲಿ `sunrise.php` ಎಂಬ PHP ಫೈಲ್ ಅನ್ನು ರಚಿಸಿ:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ಈ ಲೋಡರ್ ಈ pattern ಅನ್ನು ಹುಡುಕಲು plugins directory ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತದೆ:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

ಹೊಂದಾಣಿಕೆಯಾದ ಫೈಲ್‌ಗಳನ್ನು addon path ಆಧಾರದ ಮೇಲೆ ಅಕ್ಷರಮಾಲೆಯ ಕ್ರಮದಲ್ಲಿ (alphabetical order) ಲೋಡ್ ಮಾಡಲಾಗುತ್ತದೆ.

## ಫೈಲ್ ಅನ್ನು ಎಲ್ಲಿ ಇಡಬೇಕು (Where to place the file)

sunrise behavior ಹೊಂದಿರುವ addon ನ root directory ನಲ್ಲಿ ಫೈಲ್ ಅನ್ನು ಇರಿಸಿ:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

ಈ ಸ್ಕ್ಯಾನ್ ಅನ್ನು `WP_CONTENT_DIR` ಗೆ ಸಂಬಂಧಿಸಿ (relative) ಮಾಡಲಾಗುತ್ತದೆ, ಪ್ರಸ್ತುತ `WP_PLUGIN_DIR` ಮೌಲ್ಯಕ್ಕೆ ಅಲ್ಲ. multi-tenancy ಅಥವಾ ಇತರ ಆರಂಭಿಕ bootstrap ಕೋಡ್‌ಗಳು sunrise ಸಮಯದಲ್ಲಿ plugin directory constants ಅನ್ನು ಬದಲಾಯಿಸಿದಾಗಲೂ ಇದು discovery ಅನ್ನು ಸ್ಥಿರವಾಗಿರಿಸುತ್ತದೆ.

ದಯವಿಟ್ಟು ನೇರವಾಗಿ ರಚಿಸಲಾದ `wp-content/sunrise.php` ಫೈಲ್ ಅನ್ನು ಎಡಿಟ್ ಮಾಡಬೇಡಿ. ಈ ಲೋಡರ್, Ultimate Multisite ಯಿಂದ ಇನ್‌ಸ್ಟಾಲ್ ಮತ್ತು ಅಪ್ಡೇಟ್ ಆಗುವ core sunrise ಫೈಲ್ ಅನ್ನು forking ಮಾಡದೆ, ಕಸ್ಟಮ್ ಕೋಡ್‌ಗೆ sunrise behavior ಅನ್ನು ವಿಸ್ತರಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ.

## ಲಭ್ಯವಿರುವ hooks ಮತ್ತು filters

Addon sunrise ಫೈಲ್‌ಗಳು Ultimate Multisite domain mapping ಲೋಡ್ ಆದ ನಂತರ ಮತ್ತು WordPress `ms_loaded` ಅನ್ನು ಫೈರ್ ಮಾಡುವ ಮೊದಲು ರನ್ ಆಗುತ್ತವೆ. ಈ ಹಂತದಲ್ಲಿ, ಒಂದು sunrise ಫೈಲ್ ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಮಾಡಬಹುದು:

- `$current_site` ಮತ್ತು `$current_blog` ಅನ್ನು ಓದಲು ಅಥವಾ override ಮಾಡಲು;
- ಡೇಟಾಬೇಸ್ configuration ಲೋಡ್ ಆದ ನಂತರ `$wpdb` ಅನ್ನು ಪ್ರವೇಶಿಸಲು;
- ಅಗತ್ಯವಿದ್ದಾಗ `BLOG_ID_CURRENT_SITE` ನಂತಹ sunrise-time constants ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಲು;
- multi-tenancy integration ಬಳಸುವ routing state ಸೇರಿದಂತೆ Ultimate Multisite sunrise helper state ಅನ್ನು ಓದಲು.

Ultimate Multisite ತನ್ನ sunrise loader ಮುಗಿಸಿದ ನಂತರ `wu_sunrise_loaded` ಅನ್ನು ಫೈರ್ ಮಾಡುತ್ತದೆ. sunrise bootstrap ಪೂರ್ಣಗೊಂಡ ನಂತರವೂ ರನ್ ಆಗಬೇಕಾದ ಕೋಡ್‌ಗಾಗಿ ಆ action ಅನ್ನು ಬಳಸಿ.

sunrise phase ನಲ್ಲಿ ಈಗಾಗಲೇ ಲೋಡ್ ಆಗಿರುವ functions ಗಳನ್ನು ಮಾತ್ರ ಕರೆಯಿರಿ. database-heavy work, template rendering, HTTP requests, ಮತ್ತು ಸಾಮಾನ್ಯ plugin load order ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದು ಊಹಿಸುವ ಕೋಡ್‌ಗಳನ್ನು ತಪ್ಪಿಸಿ.

## ಕನಿಷ್ಠ ಉದಾಹರಣೆ (Minimal example)

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

ಫೈಲ್ ಅನ್ನು ನಿಯೋಜಿಸಿದ ನಂತರ, ಎರಡೂ paths ಸರಿಯಾಗಿ bootstrap ಆಗುತ್ತವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಒಂದು mapped domain ಮತ್ತು ಒಂದು unmapped main-site URL ಅನ್ನು ಲೋಡ್ ಮಾಡಿ.
