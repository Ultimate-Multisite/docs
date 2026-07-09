---
id: wu_connector_enforcement_option_keys
title: فلټر - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# فلټر: wu_connector_enforcement_option_keys

د AI برابروونکي د option keys لړ فلټر کړئ چې له اصلي سایټ څخه پلي کېږي.

د دودیزو یا درېیمګړو AI برابروونکي plugins لپاره option keys ورزیات کړئ، څو د هغوی settings هم په فرعي سایټونو کې له اصلي سایټ څخه میراثي شي.

## پارامېټرونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $keys | `string[]` | د پلي کولو لپاره د option key نومونه (لا له مخکې په خوځنده ډول موندل شوي connector keys او EXTRA_PROVIDER_OPTIONS پکې شامل دي). |

### له نسخې راهیسې

- 1.2.0
### سرچینه

په [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) کې په 206 کرښه تعریف شوی.
