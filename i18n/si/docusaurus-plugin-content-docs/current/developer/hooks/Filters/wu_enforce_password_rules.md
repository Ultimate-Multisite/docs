---
id: wu_enforce_password_rules
title: පෙරහන - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# පෙරහන: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

අමතර මුරපද නීති බලගන්වන්නේද යන්න පෙරහන් කරයි.

true නම්, අවම දිග සහ අක්ෂර අවශ්‍යතා බලගන්වයි. "Super Strong" සැකසුම සඳහා හෝ Defender Pro හි Strong Password විශේෂාංගය සක්‍රියව ඇති විට ස්වයංක්‍රීයව සක්‍රිය වේ.

## පරාමිති {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $enforce_rules | `bool` | අමතර නීති බලගන්වන්නේද යන්න. |
| $strength_setting | `string` | admin සැකසුම් අගය. |
| $defender_active | `bool` | Defender Pro Strong Password සක්‍රියව තිබේද යන්න. |

### සිට {#since}

- 2.4.0
### මූලාශ්‍රය {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) හි 531 පේළියේ නිර්වචනය කර ඇත.
