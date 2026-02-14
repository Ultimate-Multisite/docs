---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Allow plugin developers to add new checks in order to define the results.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $result | `bool` | het huidige resultaat. |
| $domain | `self` | De huidige domeininstantie. |
| $domains_and_ips | `array` | De lijst van domeinen en IP's gevonden bij de DNS-lookup. |

### Since

- 2.0.4

### Source

Gedefinieerd in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) op regel 455

## Returns
Of de DNS correct is ingesteld of niet.
