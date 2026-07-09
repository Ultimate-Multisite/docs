---
id: wu_domain_became_primary
title: Acción - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Acción: wu_domain_became_primary

Actívase cando un dominio se converte no dominio principal dun sitio.

Esta acción desencadéase cando a bandeira primary_domain dun dominio se establece como verdadeira, xa sexa ao crear un novo dominio principal ou ao actualizar un dominio existente para que se converta en principal.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | O dominio que se converteu en principal. |
| $blog_id | `int` | O ID do blog do sitio afectado. |
| $was_new | `bool` | Se este é un dominio creado recentemente. |

### Desde

- 2.0.0
### Fonte

Definido en [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) na liña 560
