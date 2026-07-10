---
id: wu_domain_has_correct_dns
title: فلٽر - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# فلٽر: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

plugin ڊولپرن کي نتيجن جي وضاحت ڪرڻ لاءِ نيون جاچون شامل ڪرڻ جي اجازت ڏيو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $result | `bool` | موجوده نتيجو. |
| $domain | `self` | موجوده ڊومين instance. |
| $domains_and_ips | `array` | DNS lookup ۾ مليل ڊومينن ۽ IPs جي فهرست. |

### کان وٺي {#since}

- 2.0.4
### ذريعو {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) ۾ line 455 تي بيان ٿيل


## واپسيون {#returns}
ڇا DNS صحيح نموني setup ٿيل آهي يا نه.
