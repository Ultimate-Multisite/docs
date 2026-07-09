---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Tillad plugin-udviklere at tilføje nye kontroller for at definere resultaterne.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $result | `bool` | det aktuelle resultat. |
| $domain | `self` | Den aktuelle domæneinstans. |
| $domains_and_ips | `array` | Listen over domæner og IP'er fundet ved DNS-opslaget. |

### Siden

- 2.0.4
### Kilde

Defineret i [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) på linje 455


## Returnerer
Om DNS er korrekt opsat eller ej.
