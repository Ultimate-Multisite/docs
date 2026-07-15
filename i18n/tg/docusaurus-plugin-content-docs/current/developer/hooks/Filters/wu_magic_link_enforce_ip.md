---
id: wu_magic_link_enforce_ip
title: Филтр - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Филтр кунед, ки оё санҷиши суроғаи IP маҷбурӣ карда шавад.

Ба false гузоред, то token-ҳо аз шабакаҳои гуногун кор кунанд. Ин амниятро коҳиш медиҳад, вале истифодабариро осонтар мекунад (масалан, барои корбарони мобилӣ ҳангоми иваз кардани шабакаҳо).

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $enforce | `bool` | Оё мутобиқати суроғаи IP маҷбурӣ карда шавад. |

### Аз версияи {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) дар сатри 422 муайян шудааст
