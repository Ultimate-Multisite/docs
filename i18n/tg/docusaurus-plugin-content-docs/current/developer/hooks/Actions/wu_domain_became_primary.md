---
id: wu_domain_became_primary
title: Амал - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Вақте иҷро мешавад, ки домен барои як сайт домени асосӣ мегардад.

Ин action вақте ба кор медарояд, ки парчами primary_domain-и домен ба true гузошта мешавад, ё ҳангоми эҷоди домени нави асосӣ, ё ҳангоми навсозии домени мавҷуда барои асосӣ шудан.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Домене, ки асосӣ шуд. |
| $blog_id | `int` | ID-и блоги сайти таъсирдида. |
| $was_new | `bool` | Оё ин домени навэҷодшуда аст. |

### Аз версияи {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) дар сатри 560 муайян шудааст
