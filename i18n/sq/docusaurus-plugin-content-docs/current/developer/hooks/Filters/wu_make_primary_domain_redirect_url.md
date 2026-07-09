---
id: wu_make_primary_domain_redirect_url
title: Filtër - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtron URL-në e ridrejtimit pas bërjes së një domain primar.

U lejon zhvilluesve të përshtasin se ku ridrejtohen përdoruesit pas vendosjes me sukses të një domain si primar. Si parazgjedhje, ridrejton te URL-ja aktuale në sajtin kryesor, ose te URL-ja e admin-it të sajtit që po modifikohet.

## Parametrat

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $redirect_url | `string` | URL-ja e parazgjedhur e ridrejtimit. Ose URL-ja aktuale (nëse është sajti kryesor) ose URL-ja e admin-it të sajtit aktual. |
| $current_site | `int` | ID-ja e sajtit domain-i i të cilit po bëhet primar. |
| $domain | `\Domain` | Objekti domain që u bë primar. |
| $old_primary_domains | `array` | Array me ID-të e domain-eve që më parë ishin primarë. |

### Që nga

- 2.0.0
### Burimi

Përcaktuar në [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) në rreshtin 639


## Kthen
URL-në e filtruar të ridrejtimit.
