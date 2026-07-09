---
id: wu_domain_became_primary
title: Gweithred - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Yn tanio pan fydd parth yn dod yn brif barth ar gyfer gwefan.

Caiff yr action hwn ei sbarduno pan osodir baner primary_domain parth yn true, naill ai wrth greu prif barth newydd neu wrth ddiweddaru parth presennol i ddod yn brif un.

## Paramedrau

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Y parth a ddaeth yn brif un. |
| $blog_id | `int` | ID blog y wefan yr effeithir arni. |
| $was_new | `bool` | A yw hwn yn barth sydd newydd ei greu. |

### Ers

- 2.0.0
### Ffynhonnell

Wedi’i ddiffinio yn [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ar linell 560
