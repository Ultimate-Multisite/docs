---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Se déclenche lorsqu'un domaine devient le domaine principal d'un site.

Cette action est déclenchée lorsque le drapeau primary_domain d'un domaine est défini sur true, soit lors de la création d'un nouveau domaine principal, soit lors de la mise à jour d'un domaine existant pour le rendre principal.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Le domaine qui est devenu principal. |
| $blog_id | `int` | L'ID du blog du site concerné. |
| $was_new | `bool` | Indique si c'est un domaine nouvellement créé. |

### Since

- 2.0.0

### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) at line 560
