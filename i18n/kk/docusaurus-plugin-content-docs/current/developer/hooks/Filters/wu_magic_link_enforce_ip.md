---
id: wu_magic_link_enforce_ip
title: Сүзгі - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IP мекенжайын тексеруді мәжбүрлі түрде қолдану-қолданбауды сүзу.

Токендердің әртүрлі желілерден жұмыс істеуіне рұқсат беру үшін false мәніне орнатыңыз. Бұл қауіпсіздікті төмендетеді, бірақ пайдалануға ыңғайлылықты арттырады (мысалы, желілерді ауыстыратын мобильді пайдаланушылар үшін).

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $enforce | `bool` | IP мекенжайының сәйкестігін мәжбүрлі түрде қолдану-қолданбау. |

### Бастап {#since}

- 2.0.0
### Дереккөз {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) ішінде, 422-жолда анықталған
