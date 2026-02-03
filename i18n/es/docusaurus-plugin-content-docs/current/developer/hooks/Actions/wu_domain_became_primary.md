---
id: wu_domain_became_primary
title: Acción - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Acción: wu_domain_became_primary

Se dispara cuando un dominio se convierte en el dominio principal de un sitio.

Esta acción se activa cuando la bandera primary_domain de un dominio se establece en true, ya sea al crear un nuevo dominio principal o al actualizar un dominio existente para que sea principal.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | El dominio que se convirtió en principal. |
| $blog_id | `int` | El ID del blog del sitio afectado. |
| $was_new | `bool` | Si se trata de un dominio recién creado. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) en la línea 560
