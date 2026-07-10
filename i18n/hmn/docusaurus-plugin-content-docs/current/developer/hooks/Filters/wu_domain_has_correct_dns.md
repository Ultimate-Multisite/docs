---
id: wu_domain_has_correct_dns
title: Lim - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Lim: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Cia cov tsim qhov txuas ntxiv ntxiv tau cov kev kuaj tshiab kom txhais tau cov txiaj ntsig.

## Cov kev ntsuas {#parameters}

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $result | `bool` | qhov txiaj ntsig tam sim no. |
| $domain | `self` | Qhov domain instance tam sim no. |
| $domains_and_ips | `array` | Daim ntawv teev cov domain thiab IP uas pom hauv DNS lookup. |

### Txij li {#since}

- 2.0.4
### Qhov chaw los {#source}

Txhais nyob hauv [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) ntawm kab 455


## Xa rov qab {#returns}
Seb DNS puas tau teeb kom raug lossis tsis raug.
