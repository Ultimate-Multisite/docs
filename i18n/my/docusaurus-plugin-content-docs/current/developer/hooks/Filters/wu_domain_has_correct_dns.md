---
id: wu_domain_has_correct_dns
title: စစ်ထုတ်ခြင်း - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

ပလပ်အင် ဖန်တီးသူတွေအနေနဲ့ ရလဒ်တွေကို သတ်မှတ်နိုင်ဖို့ စစ်ဆေးမှုအသစ်တွေ ထပ်ထည့်ခွင့်ပေးပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | လက်ရှိရလဒ်။ |
| $domain | `self` | လက်ရှိ ဒိုမိန်း အကောင်အထည်ဖော်မှု။ |
| $domains_and_ips | `array` | DNS ရှာဖွေမှုမှာ တွေ့ရှိရတဲ့ ဒိုမိန်းတွေနဲ့ IP တွေ စာရင်း။ |

### Since {#since}

- 2.0.4
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) ရဲ့ ၄၅၅ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။

## Returns {#returns}
DNS ကို မှန်ကန်စွာ တည်ဆောက်ထားခြင်း ရှိ၊ မရှိ။
