---
id: wu_make_primary_domain_redirect_url
title: פֿילטער - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# פֿילטער: wu_make_primary_domain_redirect_url

פֿילטערט דעם ווײַטערפֿיר־URL נאָך מאַכן אַ דאָמיין הויפּט.

דערלויבט אַנטוויקלער צוצופּאַסן וווּ באַניצער ווערן ווײַטערגעפֿירט נאָך דעם ווי אַ דאָמיין איז מצליח באַשטימט געוואָרן ווי הויפּט. לויטן פעליקייט, פֿירט ווײַטער צו דעם איצטיקן URL אויפֿן הויפּט וועבזײַטל, אָדער צו דעם אַדמין־URL פֿון דעם וועבזײַטל וואָס ווערט געענדערט.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $redirect_url | `string` | דער פעליקייטדיקער ווײַטערפֿיר־URL. אָדער דער איצטיקער URL (אויב הויפּט וועבזײַטל) אָדער דער אַדמין־URL פֿון דעם איצטיקן וועבזײַטל. |
| $current_site | `int` | דער ID פֿון דעם וועבזײַטל וועמענס דאָמיין ווערט געמאַכט הויפּט. |
| $domain | `\Domain` | דער דאָמיין־אָביעקט וואָס איז געמאַכט געוואָרן הויפּט. |
| $old_primary_domains | `array` | מענגע פֿון IDs פֿון דאָמיינס וואָס זענען פֿריִער געווען הויפּט. |

### זינט {#since}

- 2.0.0
### מקור {#source}

דעפֿינירט אין [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) אויף שורה 639


## גיט צוריק {#returns}
דער געפֿילטערטער ווײַטערפֿיר־URL.
