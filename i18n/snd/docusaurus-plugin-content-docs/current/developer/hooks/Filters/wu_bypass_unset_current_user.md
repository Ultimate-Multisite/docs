---
id: wu_bypass_unset_current_user
title: فلٽر - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# فلٽر: wu_bypass_unset_current_user

ڊولپرز کي unset current user code کي بائي پاس ڪرڻ جي اجازت ڏيو.

null کان سواءِ ڪجهه به واپس ڪرڻ سان لاگ اِن ٿيل current user جي unset کي بائي پاس ڪيو ويندو. هي ڪجهه حالتن ۾ ڪارائتو ٿي سگهي ٿو، مثال طور، جڏهن اهڙين ذيلي سائيٽن سان ڪم ڪجي جيڪي admin panels طور استعمال ٿي رهيون آهن.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $null_or_bypass | `mixed` | اڳتي وڌڻ لاءِ Null، ان کي بائي پاس ڪرڻ لاءِ ٻيو ڪجهه به. |
| $current_user | `false\|\WP_User` | current user object. |

### کان وٺي

- 2.0.11
### ذريعو

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ۾ ليڪ 221 تي بيان ڪيل


## واپس ڪري ٿو
