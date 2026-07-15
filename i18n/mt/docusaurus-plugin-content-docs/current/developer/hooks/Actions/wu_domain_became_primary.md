---
id: wu_domain_became_primary
title: Azzjoni - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Azzjoni: wu_domain_became_primary

Tiskatta meta dominju jsir id-dominju primarju għal sit.

Din l-azzjoni tiġi attivata meta l-bandiera primary_domain ta' dominju tiġi ssettjata għal true, jew meta jinħoloq dominju primarju ġdid jew meta dominju eżistenti jiġi aġġornat biex isir primarju.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Id-dominju li sar primarju. |
| $blog_id | `int` | L-ID tal-blog tas-sit affettwat. |
| $was_new | `bool` | Jekk dan huwiex dominju maħluq ġdid. |

### Minn {#since}

- 2.0.0
### Sors {#source}

Iddefinit f'[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) fil-linja 560
