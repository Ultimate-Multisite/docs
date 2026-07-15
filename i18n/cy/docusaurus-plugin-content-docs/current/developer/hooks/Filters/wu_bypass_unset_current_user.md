---
id: wu_bypass_unset_current_user
title: Hidlydd - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Caniatáu i ddatblygwyr osgoi cod dad-osod y defnyddiwr cyfredol.

Bydd dychwelyd unrhyw beth heblaw null yn osgoi dad-osod y defnyddiwr cyfredol sydd wedi mewngofnodi. Gall hyn fod yn ddefnyddiol mewn rhai senarios, er enghraifft, wrth ymdrin ag is-safleoedd sy’n cael eu defnyddio fel paneli gweinyddu.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null i symud ymlaen, unrhyw beth arall i’w osgoi. |
| $current_user | `false\|\WP_User` | Gwrthrych y defnyddiwr cyfredol. |

### Ers {#since}

- 2.0.11
### Ffynhonnell {#source}

Diffinnir yn [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ar linell 221


## Dychweliadau {#returns}
