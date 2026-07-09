---
id: wu_make_primary_domain_redirect_url
title: Saringan - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Nyaring URL pangalihan sawisé ndadèkaké sawijining domain dadi utama.

Ngidini pangembang kanggo ngatur menyang ngendi pangguna dialihaké sawisé kasil nyetel sawijining domain minangka utama. Kanthi gawan, ngalihaké menyang URL saiki ing situs utama, utawa menyang URL admin saka situs sing lagi diowahi.

## Parameter

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $redirect_url | `string` | URL pangalihan gawan. Bisa URL saiki (yen situs utama) utawa URL admin saka situs saiki. |
| $current_site | `int` | ID saka situs sing domaine lagi didadèkaké utama. |
| $domain | `\Domain` | Objek domain sing wis didadèkaké utama. |
| $old_primary_domains | `array` | Larik ID saka domain sing sadurungé utama. |

### Wiwit

- 2.0.0
### Sumber

Ditetepaké ing [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ing baris 639


## Balènan
URL pangalihan sing wis disaring.
