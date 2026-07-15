---
id: wu_should_create_domain_record_for_site
title: فلٽر - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

فلٽر ڪري ٿو ته ڇا Ultimate Multisite نئين ٺهيل سائيٽ لاءِ domain ريڪارڊ ٺاهي.

هي فلٽر استعمال ڪريو ته جيئن انهن سائيٽن لاءِ خودڪار domain-record ٺاهڻ کي روڪيو يا ملتوي ڪيو وڃي جيڪي گڏيل checkout-form بنيادي domain، اندروني host، يا اهڙو domain استعمال ڪن ٿيون جنهن کي ٻي integration الڳ طور سنڀاليندي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $create | `bool` | ڇا domain ريڪارڊ ٺاهيو وڃي. |
| $site | `WP_Site` | نئون ٺهيل سائيٽ object. |

### کان وٺي {#since}

- 2.13.0

### ذريعو {#source}

`inc/functions/domain.php` ۾ بيان ٿيل.


## واپسيون {#returns}

Boolean جيڪو ظاهر ڪري ٿو ته domain ريڪارڊ ٺاهڻو آهي يا نه.
