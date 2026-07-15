---
id: wp_ultimo_skip_network_active_check
title: فلټر - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# فلټر: wp_ultimo_skip_network_active_check

پراختیاکوونکو ته اجازه ورکوي چې د شبکې فعالولو کتنه لنډه پرې کړي.

دا هغه وخت ګټور دی کله چې د composer پر بنسټ او نورو دودیزو جوړښتونو کارول کېږي، لکه Bedrock، د بېلګې په توګه، چې پکې د plugins د mu-plugins په توګه کارول معمول وي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $skip_network_activation_check | `bool` | ایا باید کتنه پرېږدو که نه، په ډیفالټ false ده. |

### له نسخې راهیسې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) کې په ۲۷۲ کرښه تعریف شوی


## راستنوي {#returns}
true که تاسو غواړئ کتنه پرېږدئ، که نه نو false.
