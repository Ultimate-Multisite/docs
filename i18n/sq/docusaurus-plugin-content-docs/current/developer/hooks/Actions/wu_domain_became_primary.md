---
id: wu_domain_became_primary
title: Veprim - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Aktivizohet kur një domen bëhet domeni kryesor për një sajt.

Ky action aktivizohet kur flag-u primary_domain i një domeni vendoset në true, ose kur krijohet një domen i ri kryesor ose kur përditësohet një domen ekzistues për t'u bërë kryesor.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domeni që u bë kryesor. |
| $blog_id | `int` | ID-ja e blogut të sajtit të prekur. |
| $was_new | `bool` | Nëse ky është një domen i sapokrijuar. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) në rreshtin 560
