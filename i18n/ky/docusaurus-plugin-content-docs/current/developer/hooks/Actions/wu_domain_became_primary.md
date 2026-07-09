---
id: wu_domain_became_primary
title: Аракет - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Аракет: wu_domain_became_primary

Домен сайт үчүн негизги домен болгондо иштейт.

Бул аракет домендин primary_domain белгиси true болуп коюлганда ишке кирет: жаңы негизги домен түзүлгөндө же бар домен негизги болушу үчүн жаңыртылганда.

## Параметрлер

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Негизги болгон домен. |
| $blog_id | `int` | Таасир тийген сайттын blog ID'си. |
| $was_new | `bool` | Бул жаңы түзүлгөн доменби же жокпу. |

### Кайсы версиядан тартып

- 2.0.0
### Булак

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ичинде 560-сапта аныкталган.
