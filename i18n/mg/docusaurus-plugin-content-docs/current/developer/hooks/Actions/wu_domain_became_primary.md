---
id: wu_domain_became_primary
title: Hetsika - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Mirehitra rehefa lasa sehatra fototra ho an’ny tranonkala iray ny sehatra iray.

Ity action ity dia voatsindry rehefa apetraka ho true ny flag primary_domain an’ny sehatra iray, na rehefa mamorona sehatra fototra vaovao na rehefa manavao sehatra efa misy mba ho lasa fototra.

## Paramètres

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Ny sehatra izay lasa fototra. |
| $blog_id | `int` | Ny blog ID an’ilay tranonkala voakasika. |
| $was_new | `bool` | Raha sehatra vao noforonina ity na tsia. |

### Hatramin’ny

- 2.0.0
### Loharano

Voafaritra ao amin’ny [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) amin’ny andalana 560
