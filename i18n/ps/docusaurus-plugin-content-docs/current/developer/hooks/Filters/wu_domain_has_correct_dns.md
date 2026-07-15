---
id: wu_domain_has_correct_dns
title: فلټر - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# فلټر: wu_domain_has_correct_dns

د plugin جوړوونکو ته اجازه ورکوي چې د پایلو د ټاکلو لپاره نوي کتنې ورزیاتې کړي.

## پارامیټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $result | `bool` | اوسنۍ پایله. |
| $domain | `self` | د اوسني ډومېن بېلګه. |
| $domains_and_ips | `array` | د DNS پلټنه کې موندل شويو ډومېنونو او IP ګانو لېست. |

### له نسخې راهیسې {#since}

- 2.0.4
### سرچینه {#source}

په [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) کې په 455 کرښه تعریف شوی


## ستنېدنې {#returns}
ایا DNS په سمه توګه تنظیم شوی که نه.
