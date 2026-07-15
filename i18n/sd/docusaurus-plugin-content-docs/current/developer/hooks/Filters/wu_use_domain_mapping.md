---
id: wu_use_domain_mapping
title: فلٽر - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# فلٽر: wu_use_domain_mapping

طئي ڪريو ته ميپنگ استعمال ٿيڻ گهرجي يا نه

عام طور تي، توهان چاهيندا ته رڳو فعال ميپنگز کي استعمال ٿيڻ جي اجازت ڏيو. بهرحال، جيڪڏهن توهان وڌيڪ ترقي يافته منطق استعمال ڪرڻ چاهيو ٿا، يا غير فعال ڊومينز کي به ميپ ٿيڻ جي اجازت ڏيڻ چاهيو ٿا، ته هتي سادو فلٽر ڪريو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $is_active | `bool` | ڇا ميپنگ کي فعال طور ورتو وڃي؟ |
| $mapping | `\Domain` | ميپنگ جنهن جو اسان جائزو وٺي رهيا آهيون |
| $domain | `string` |  |

### ذريعو {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ۾ لڪير 391 تي بيان ڪيل آهي
