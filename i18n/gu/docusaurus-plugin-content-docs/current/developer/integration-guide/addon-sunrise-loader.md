---
title: એડઓન સૂર્યોદય ફાઇલ લોડર
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 એ add-ons અને custom MU-plugin integrations માટે એક sunrise extension loader ઉમેર્યું છે. આ loader એવા add-ons માટે છે જેને WordPress ના sunrise bootstrapping દરમિયાન ચાલવાની જરૂર હોય, અને આ માટે તમારે `wp-content/sunrise.php` ફાઇલ એડિટ કરવાની જરૂર નથી.

## ક્યારે ઉપયોગ કરવો {#when-to-use-it}

જ્યારે તમારા integration ને સામાન્ય plugins લોડ થતા પહેલા ચાલવાની જરૂર હોય, ત્યારે sunrise extension નો ઉપયોગ કરો. ઉદાહરણ તરીકે, custom domain routing, host-specific request handling, અથવા early network bootstrap adjustments.

સામાન્ય integrations માટે, regular WordPress plugins, MU-plugins, અને document કરેલા Ultimate Multisite hooks નો ઉપયોગ કરવો વધુ સારો છે. Sunrise કોડ ખૂબ જ વહેલો ચાલે છે અને તે નાનો, સુરક્ષિત (defensive), અને કોઈ અન્ય dependency પર આધાર ન રાખતો હોવો જોઈએ.

## ફાઇલનું નામકરણ (File naming convention) {#file-naming-convention}

એક PHP ફાઇલ બનાવો જેનું નામ `sunrise.php` હોય અને તે એક addon directory માં મૂકવામાં આવે, જેનું નામ `ultimate-multisite-` થી શરૂ થતું હોય:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

આ loader આ pattern માટે plugins directory માં સ્કેન કરે છે:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

મેચ થતી ફાઇલોને addon path પ્રમાણે અક્ષરક્રમમાં (alphabetical order) લોડ કરવામાં આવે છે.

## ફાઇલ ક્યાં મૂકવી {#where-to-place-the-file}

આ ફાઇલને તે addon ના root directory માં મૂકો જે sunrise behaviour માટે જવાબદાર છે:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

આ સ્કેન `WP_CONTENT_DIR` ને સંબંધિત હોય છે, નહિ કે `WP_PLUGIN_DIR` ના વર્તમાન મૂલ્યને. આનાથી ખાતરી રહે છે કે જ્યારે multi-tenancy અથવા અન્ય early bootstrap કોડ sunrise દરમિયાન plugin directory constants માં ફેરફાર કરે, ત્યારે પણ ડિસ્કવરી સ્થિર રહે.

કૃપા કરીને સીધી રીતે જનરેટ થયેલી `wp-content/sunrise.php` ફાઇલ એડિટ કરશો નહીં. આ loader custom કોડને sunrise behaviour ને extend કરવા દે છે, જેનાથી Ultimate Multisite દ્વારા ઇન્સ્ટોલ અને અપડેટ થતી core sunrise ફાઇલને ફોર્ક કરવાની જરૂર પડતી નથી.

## ઉપલબ્ધ Hooks અને Filters {#hooks-and-filters-available}

Addon sunrise ફાઇલો Ultimate Multisite domain mapping લોડ થયા પછી અને WordPress દ્વારા `ms_loaded` ફायर થાય તે પહેલા ચાલે છે. આ સમયે એક sunrise ફાઇલ નીચેના કાર્યો કરી શકે છે:

- `$current_site` અને `$current_blog` ને વાંચી શકે અથવા તેના પર ઓવરરાઇડ કરી શકે;
- ડેટાબેઝ કન્ફિગરેશન લોડ થયા પછી `$wpdb` ને એક્સેસ કરી શકે;
- જરૂર પડ્યે sunrise-સમયના constants જેમ કે `BLOG_ID_CURRENT_SITE` ને define કરી શકે;
- Ultimate Multisite sunrise helper state વાંચી શકે, જેમાં multi-tenancy integrations દ્વારા ઉપયોગમાં લેવાતી routing state શામેલ છે.

Ultimate Multisite તેના sunrise loader પૂર્ણ કર્યા પછી `wu_sunrise_loaded` ફायर કરે છે. જે કોડ sunrise bootstrap પૂર્ણ થયા પછી પણ sunrise lifecycle નો ભાગ હોય, તેના માટે આ action નો ઉપયોગ કરો.

ફક્ત એવા functions ને કૉલ કરો જે sunrise phase માં પહેલેથી લોડ થઈ ગયા હોય. ડેટાબેઝ પર વધુ ભારરૂપી કામ (database-heavy work), template rendering, HTTP requests, અને એવા કોડ ટાળો જે ધારે છે કે normal plugin load order પૂર્ણ થઈ ગયો છે.

## ન્યૂનતમ ઉદાહરણ (Minimal example) {#minimal-example}

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

ફાઇલ deploy કર્યા પછી, બંને paths યોગ્ય રીતે bootstrap થાય છે તેની ખાતરી કરવા માટે એક mapped domain અને એક unmapped main-site URL લોડ કરો.
