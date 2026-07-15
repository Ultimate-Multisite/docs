---
id: wu_bypass_unset_current_user
title: فلٽر - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# فلٽر: wu_bypass_unset_current_user

ڊولپرن کي unset current user ڪوڊ کي باءِ پاس ڪرڻ جي اجازت ڏيو.

null کانسواءِ ٻيو ڪجهه به واپس ڪرڻ، لاگ اِن ٿيل موجوده يوزر جي unset کي باءِ پاس ڪندو. هي ڪجهه حالتن ۾ ڪارائتو ٿي سگهي ٿو، مثال طور، جڏهن اهڙين ذيلي سائيٽن سان ڪم ڪيو وڃي جيڪي admin panels طور استعمال ٿي رهيون آهن.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $null_or_bypass | `mixed` | اڳتي وڌڻ لاءِ Null، ان کي باءِ پاس ڪرڻ لاءِ ٻيو ڪجهه به. |
| $current_user | `false\|\WP_User` | موجوده يوزر آبجيڪٽ. |

### کان وٺي {#since}

- 2.0.11
### ذريعو {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ۾ لائين 221 تي بيان ٿيل


## واپس ڪري ٿو {#returns}
