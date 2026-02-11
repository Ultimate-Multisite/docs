---
id: wu_domain_has_correct_dns
title: Filtre - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Permettre aux développeurs de plugins d'ajouter de nouvelles vérifications afin de définir les résultats.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | le résultat actuel. |
| $domain | `self` | L'instance de domaine actuelle. |
| $domains_and_ips | `array` | La liste des domaines et IPs trouvés lors de la recherche DNS. |

### Since

- 2.0.4
### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) at line 455


## Returns
Si le DNS est correctement configuré ou non.
