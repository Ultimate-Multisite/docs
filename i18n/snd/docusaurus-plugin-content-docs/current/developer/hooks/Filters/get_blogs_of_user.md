---
id: get_blogs_of_user
title: فلٽر - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# فلٽر: get_blogs_of_user

اصل WP فلٽر کي هتي، احتياط خاطر، نقل ڪري ٿو.

انهن سائيٽن جي فهرست کي فلٽر ڪري ٿو جن سان هڪ يوزر لاڳاپيل آهي.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $sites | `object[]` | يوزر سان لاڳاپيل سائيٽ آبجيڪٽس جو هڪ ايري. |
| $user_id | `int` | يوزر ID. |
| $all | `bool` | ڇا واپس ڪيل سائيٽن جي ايري ۾ سڀ سائيٽون شامل هئڻ گهرجن، انهن سميت جن کي 'deleted'، 'archived'، يا 'spam' طور نشان لڳايو ويو آهي. ڊفالٽ false. |

### کان وٺي

- 2.0.11
### ذريعو

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ۾ لائن 851 تي وضاحت ٿيل.
