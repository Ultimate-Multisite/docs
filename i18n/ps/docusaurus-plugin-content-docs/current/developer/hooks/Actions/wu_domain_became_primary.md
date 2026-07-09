---
id: wu_domain_became_primary
title: کړنه - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

هغه وخت چلېږي کله چې یو ډومېن د یوې سایټ لپاره لومړنی ډومېن شي.

دا Action هغه وخت رامنځته کېږي کله چې د یو ډومېن primary_domain نښه true ته وټاکل شي، یا د نوي لومړني ډومېن د جوړولو پر مهال، یا کله چې یو موجود ډومېن لومړنی کېدو ته تازه کېږي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | هغه ډومېن چې لومړنی شو. |
| $blog_id | `int` | د اغېزمنې سایټ blog ID. |
| $was_new | `bool` | ایا دا نوی جوړ شوی ډومېن دی. |

### له نسخې راهیسې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) کې په 560 کرښه تعریف شوی.
