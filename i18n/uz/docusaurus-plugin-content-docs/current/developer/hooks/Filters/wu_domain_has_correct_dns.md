---
id: wu_domain_has_correct_dns
title: Filtr - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

plugin dasturchilariga natijalarni aniqlash uchun yangi tekshiruvlar qo‘shishga ruxsat beradi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $result | `bool` | joriy natija. |
| $domain | `self` | Joriy domen instansiyasi. |
| $domains_and_ips | `array` | DNS lookup da topilgan domenlar va IP manzillar ro‘yxati. |

### Beri {#since}

- 2.0.4
### Manba {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) faylida 455-qatorda aniqlangan


## Qaytaradi {#returns}
DNS to‘g‘ri sozlangan yoki yo‘qligini.
