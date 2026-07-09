---
id: get_blogs_of_user
title: فلٽر - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

اصلي WP Filter کي هتي ٻيهر لاڳو ڪري ٿو، احتياط طور.

انهن سائيٽن جي فهرست کي فلٽر ڪري ٿو جن سان صارف تعلق رکي ٿو.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $sites | `object[]` | صارف سان تعلق رکندڙ سائيٽ objects جي هڪ array. |
| $user_id | `int` | صارف ID. |
| $all | `bool` | ڇا واپس ڪيل سائيٽن جي array ۾ سڀئي سائيٽون شامل هئڻ گهرجن، جن ۾ اهي به شامل آهن جيڪي 'deleted'، 'archived'، يا 'spam' طور نشان لڳل آهن. Default false. |

### کان وٺي

- 2.0.11
### ذريعو

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ۾ line 851 تي بيان ڪيل
