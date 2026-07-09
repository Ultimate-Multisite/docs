---
id: wu_domain_became_primary
title: Гамәл - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Домен сайт өчен төп доменга әйләнгәндә эшли.

Бу гамәл доменның primary_domain флагы true итеп куелганда эшләтелә: яңа төп домен ясаганда яки булган доменны төп домен итеп яңартканда.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Төп доменга әйләнгән домен. |
| $blog_id | `int` | Йогынты ясалган сайтның blog ID. |
| $was_new | `bool` | Бу яңа ясалган доменмы. |

### Чыгарылыштан бирле {#since}

- 2.0.0
### Чыганак {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) эчендә 560 нчы юлда билгеләнгән.
