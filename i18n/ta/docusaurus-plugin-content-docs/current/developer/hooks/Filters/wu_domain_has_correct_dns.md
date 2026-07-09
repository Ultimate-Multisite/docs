---
id: wu_domain_has_correct_dns
title: வடிகட்டி - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Plugin உருவாக்குநர்கள் (developers) முடிவுகளை வரையறுக்க புதிய சோதனைகளை (checks) சேர்க்க இது அனுமதிக்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் |
|------|------|-------------|
| $result | `bool` | தற்போதைய முடிவு. |
| $domain | `self` | தற்போதைய டொமைன் நிகழ்வு. |
| $domains_and_ips | `array` | DNS தேடலில் (lookup) காணப்படும் டொமைன்கள் மற்றும் IP-களின் பட்டியல். |

### எப்போது இருந்து (Since) {#since}

- 2.0.4
### ஆதாரம் (Source) {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) என்ற கோப்பில் 455 வரியில் வரையறுக்கப்பட்டுள்ளது.


## திரும்ப அளிப்பது (Returns) {#returns}
DNS சரியாக அமைக்கப்பட்டுள்ளதா இல்லையா என்பதை இது தெரிவிக்கும்.
