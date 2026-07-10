---
id: wu_domain_became_primary
title: Acció - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Aquesta acció: wu_domain_became_primary {#action-wudomainbecameprimary}

Es activa quan un domini es converteix en el domini principal d'un site.

Aquesta acció es desencadena quan la bandera `primary_domain` d'un domini es seta a `true`, ja sigui al crear un nou domini principal o quan s'actualitza un domini existente per fer-lo principal.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | El domini que es va convertir en principal. |
| $blog_id | `int` | L'ID del blog afectat. |
| $was_new | `bool` | Si aquest és un domini nou creat. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definida a [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) a la línia 560
