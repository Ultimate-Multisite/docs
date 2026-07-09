---
id: wu_checkout_form_base_domains
title: چاڼګر - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# فلټر: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

د checkout-form شریک بنسټیز ډومېنونه فلټر کوي چې باید د mapped-domain ریکارډونه نه شي.

دا فلټر هغه وخت وکاروئ کله چې یوه ادغام د checkout فورم د **سایټ URL** ساحو لپاره اضافي بنسټیز ډومېنونه برابروي. هغه ډومېنونه چې د دې فلټر له خوا راستانه کېږي، د هر سایټ ځانګړو ډومېنونو پر ځای د شریکو ثبت کوربه‌وو په توګه چلند ورسره کېږي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $domains | `array` | د checkout فورم له تنظیماتو څخه راټول شوي شریک بنسټیز ډومېنونه. |

### له نسخې راهیسې {#since}

- 2.13.0

### سرچینه {#source}

په `inc/functions/domain.php` کې تعریف شوی.


## راستنوي {#returns}

د نورمال شوو checkout-form بنسټیزو ډومېنونو ارایه.
