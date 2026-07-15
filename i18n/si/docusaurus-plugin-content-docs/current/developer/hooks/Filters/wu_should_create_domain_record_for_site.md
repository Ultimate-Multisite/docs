---
id: wu_should_create_domain_record_for_site
title: පෙරහන - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

අලුතින් සාදන ලද අඩවියක් සඳහා Ultimate Multisite විසින් ඩොමේන් වාර්තාවක් සෑදිය යුතුද යන්න පෙරහන් කරයි.

හවුල් checkout-form මූලික ඩොමේනයක්, අභ්‍යන්තර host එකක්, හෝ වෙනත් ඒකාබද්ධ කිරීමක් වෙනම කළමනාකරණය කරන ඩොමේනයක් භාවිත කරන අඩවි සඳහා ස්වයංක්‍රීය ඩොමේන්-වාර්තා සෑදීම මර්දනය කිරීමට හෝ කල් දැමීමට මෙම filter භාවිත කරන්න.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $create | `bool` | ඩොමේන් වාර්තාව සෑදිය යුතුද යන්න. |
| $site | `WP_Site` | අලුතින් සාදන ලද අඩවි object එක. |

### සිට {#since}

- 2.13.0

### මූලාශ්‍රය {#source}

`inc/functions/domain.php` තුළ අර්ථ දක්වා ඇත.


## ප්‍රතිදාන {#returns}

ඩොමේන් වාර්තාව සෑදිය යුතුද යන්න දක්වන Boolean අගය.
