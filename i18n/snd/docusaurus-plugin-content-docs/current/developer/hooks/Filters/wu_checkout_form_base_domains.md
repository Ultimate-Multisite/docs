---
id: wu_checkout_form_base_domains
title: فلٽر - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# فلٽر: wu_checkout_form_base_domains

گڏيل چيڪ آئوٽ فارم جا بنيادي ڊومين فلٽر ڪري ٿو، جيڪي mapped-domain ريڪارڊ نه بڻجڻ گهرجن.

هي فلٽر تڏهن استعمال ڪريو جڏهن ڪا انٽيگريشن چيڪ آئوٽ فارم جي **سائيٽ URL** فيلڊز لاءِ اضافي بنيادي ڊومين مهيا ڪري. هن فلٽر مان موٽايل ڊومين هر سائيٽ جي ڪسٽم ڊومين بدران گڏيل رجسٽريشن هوسٽ طور ورتا ويندا آهن.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $domains | `array` | چيڪ آئوٽ فارم جي ترتيب مان گڏ ڪيل گڏيل بنيادي ڊومين. |

### کان وٺي {#since}

- 2.13.0

### ماخذ {#source}

`inc/functions/domain.php` ۾ بيان ڪيل.


## واپسيون {#returns}

نارمل ڪيل چيڪ آئوٽ فارم جي بنيادي ڊومينن جي array.
