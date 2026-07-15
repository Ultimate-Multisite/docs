---
id: wu_domain_became_primary
title: Toiminto - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Toiminto: wu_domain_became_primary

Käynnistyy, kun verkkotunnuksesta tulee sivuston ensisijainen verkkotunnus.

Tämä toiminto käynnistyy, kun verkkotunnuksen primary_domain-lippu asetetaan arvoon true, joko uutta ensisijaista verkkotunnusta luotaessa tai kun olemassa olevaa verkkotunnusta päivitetään ensisijaiseksi.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | The domain that became primary. |
| $blog_id | `int` | The blog ID of the affected site. |
| $was_new | `bool` | Whether this is a newly created domain. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) rivillä 560
