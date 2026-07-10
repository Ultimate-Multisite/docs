---
id: wu_magic_link_enforce_ip
title: فلټر - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Filter چې ایا د IP پته تایید پلي شي که نه.

`false` ته یې وټاکئ څو tokens له بېلابېلو شبکو څخه کار وکړي. دا امنیت کموي خو کارېدنه زیاتوي (لکه، د موبایل کاروونکو لپاره چې شبکې بدلوي).

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $enforce | `bool` | ایا د IP پتې سمون پلي شي که نه. |

### له نسخې راهیسې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) کې په ۴۲۲ کرښه تعریف شوی
