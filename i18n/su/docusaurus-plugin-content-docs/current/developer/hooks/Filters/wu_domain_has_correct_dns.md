---
id: wu_domain_has_correct_dns
title: Saringan - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Ngidinan pamekar plugin pikeun nambahkeun pamariksaan anyar supaya bisa nangtukeun hasilna.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | hasil ayeuna. |
| $domain | `self` | Instansi domain ayeuna. |
| $domains_and_ips | `array` | Daptar domain jeung IP anu kapanggih dina pilarian DNS. |

### Ti Saprak {#since}

- 2.0.4
### Sumber {#source}

Ditetepkeun dina [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) dina garis 455


## Balikan {#returns}
Naha DNS geus disetel kalayan bener atawa henteu.
