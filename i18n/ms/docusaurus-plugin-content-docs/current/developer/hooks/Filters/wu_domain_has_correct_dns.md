---
id: wu_domain_has_correct_dns
title: Penapis - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Membenarkan pembangun plugin menambah semakan baharu untuk menentukan hasilnya.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $result | `bool` | hasil semasa. |
| $domain | `self` | Contoh domain semasa. |
| $domains_and_ips | `array` | Senarai domain dan IP yang ditemui melalui carian DNS. |

### Sejak {#since}

- 2.0.4
### Sumber {#source}

Didefinisikan dalam [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) pada baris 455


## Pulangan {#returns}
Sama ada DNS telah disetkan dengan betul atau tidak.
