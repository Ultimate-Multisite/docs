---
id: wu_domain_became_primary
title: Isenzo - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Isebenza xa i-domain iba yi-domain ephambili yesayithi.

Le action iqalwa xa iflegi ye-primary_domain ye-domain isetwa ku-true, nokuba xa kusenziwa i-domain entsha ephambili okanye xa kuhlaziywa i-domain esele ikhona ukuze ibe ephambili.

## Iiparamitha {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | I-domain eye yaba ephambili. |
| $blog_id | `int` | I-ID yeblog yesayithi echaphazelekayo. |
| $was_new | `bool` | Ukuba ngaba le yi-domain esandul’ ukudalwa. |

### Ukususela {#since}

- 2.0.0
### Umthombo {#source}

Ichazwe ku-[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) kumgca 560
