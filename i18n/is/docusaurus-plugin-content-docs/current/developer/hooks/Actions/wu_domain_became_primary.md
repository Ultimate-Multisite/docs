---
id: wu_domain_became_primary
title: Aðgerð - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Aðgerð: wu_domain_became_primary {#action-wudomainbecameprimary}

Keyrist þegar lén verður aðallén fyrir vefsvæði.

Þessi aðgerð er ræst þegar primary_domain flag léns er stillt á true, annaðhvort þegar nýtt aðallén er búið til eða þegar fyrirliggjandi lén er uppfært til að verða aðallén.

## Færibreytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Lénið sem varð aðallén. |
| $blog_id | `int` | Blog ID viðkomandi vefsvæðis. |
| $was_new | `bool` | Hvort þetta sé nýstofnað lén. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) í línu 560
