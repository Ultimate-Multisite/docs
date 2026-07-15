---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Plugin geliştiricilərinə nəticələri müəyyən etmək üçün yeni yoxlamalar əlavə etməyə imkan verir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | cari nəticə. |
| $domain | `self` | cari domen nümunəsi. |
| $domains_and_ips | `array` | DNS yoxlamasında tapılan domen və IP-lərin siyahısı. |

### Since {#since}

- 2.0.4
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) faylında 455-ci sətirdə təyin edilmişdir.


## Nəticə verir {#returns}
DNS-in düzgün qurulub-qurulmadığını göstərir.
