---
id: get_blogs_of_user
title: فلټر - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# فلټر: get_blogs_of_user

دلته اصلي WP فلټر د احتیاط له مخې بیا جوړوي.

د هغو سایټونو لېست فلټر کوي چې یو کارن ورسره تړاو لري.

## پیرامیټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $sites | `object[]` | د سایټ شیانو یوه لړۍ چې د کارن پورې اړه لري. |
| $user_id | `int` | د کارن ID. |
| $all | `bool` | ایا د بېرته ورکړل شوو سایټونو لړۍ باید ټول سایټونه ولري، په هغو کې هغه هم شامل دي چې 'deleted'، 'archived'، یا 'spam' نښه شوي وي. اصلي ارزښت false دی. |

### له نسخې راهیسې {#since}

- 2.0.11
### سرچینه {#source}

په [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) کې په 851 کرښه کې تعریف شوی.
