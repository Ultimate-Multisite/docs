---
id: wu_should_create_domain_record_for_site
title: فلٽر - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# فلٽر: wu_should_create_domain_record_for_site

فلٽر ڪري ٿو ته ڇا Ultimate Multisite نئين ٺهيل سائيٽ لاءِ ڊومين رڪارڊ ٺاهڻ گهرجي.

هي فلٽر انهن سائيٽن لاءِ خودڪار ڊومين-رڪارڊ ٺاهڻ کي روڪڻ يا ملتوي ڪرڻ لاءِ استعمال ڪريو جيڪي گڏيل چيڪ آئوٽ فارم بنيادي ڊومين، اندروني ميزبان، يا اهڙو ڊومين استعمال ڪن ٿيون جنهن کي ڪا ٻي انٽيگريشن الڳ سنڀاليندي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $create | `bool` | ڇا ڊومين رڪارڊ ٺاهيو وڃي. |
| $site | `WP_Site` | نئين ٺهيل سائيٽ آبجڪٽ. |

### کان وٺي {#since}

- 2.13.0

### ذريعو {#source}

`inc/functions/domain.php` ۾ بيان ڪيل.


## واپسيون {#returns}

Boolean جيڪو ظاهر ڪري ٿو ته ڇا ڊومين رڪارڊ ٺاهڻو آهي.
