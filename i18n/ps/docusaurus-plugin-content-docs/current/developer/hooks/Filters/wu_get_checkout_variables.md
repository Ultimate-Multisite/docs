---
id: wu_get_checkout_variables
title: فلټر - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

د plugin جوړوونکو ته اجازه ورکوي چې د پیسو ورکولو پاڼې مخکې ټاکل شوي ارزښتونه filter کړي.

احتیاط وکړئ، ورک keys کولی شي په front-end کې پیسو ورکول په بشپړ ډول خراب کړي.

## پارامیټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $variables | `array` | ځایي شوي متغیرونه. |
| $checkout | `\Checkout` | د پیسو ورکولو کلاس. |

### له نسخې راهیسې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) کې په 1970 کرښه تعریف شوی


## راستنوي {#returns}
د متغیرونو نوی array.
