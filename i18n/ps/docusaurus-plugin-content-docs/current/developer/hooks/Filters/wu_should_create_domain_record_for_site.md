---
id: wu_should_create_domain_record_for_site
title: فلټر - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

فلټر کوي چې ایا Ultimate Multisite باید د نوي جوړ شوي سایټ لپاره د ډومېن ریکارډ جوړ کړي که نه.

دا فلټر وکاروئ څو د هغو سایټونو لپاره د اتومات ډومېن-ریکارډ جوړول وځپوئ یا وځنډوئ چې د ګډ checkout-form بنسټیز ډومېن، داخلي کوربه، یا داسې ډومېن کاروي چې بل ادغام به یې جلا اداره کړي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $create | `bool` | ایا د ډومېن ریکارډ باید جوړ شي که نه. |
| $site | `WP_Site` | نوی جوړ شوی سایټ څیز. |

### له نسخې راهیسې {#since}

- 2.13.0

### سرچینه {#source}

په `inc/functions/domain.php` کې تعریف شوی.


## راستنېدنې {#returns}

Boolean چې ښيي ایا د ډومېن ریکارډ جوړ شي که نه.
