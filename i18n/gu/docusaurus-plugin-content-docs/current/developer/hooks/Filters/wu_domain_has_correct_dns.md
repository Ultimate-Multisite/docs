---
id: wu_domain_has_correct_dns
title: ફિલ્ટર - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

પ્લગઇન ડેવલપર્સને પરિણામોને વ્યાખ્યાયિત કરવા માટે નવી તપાસો ઉમેરવાની મંજૂરી આપે છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | વર્તમાન પરિણામ. |
| $domain | `self` | વર્તમાન ડોમેન ઇન્સ્ટન્સ. |
| $domains_and_ips | `array` | DNS લુકઅપ પર મળેલા ડોમેન અને IP ની યાદી. |

### Since {#since}

- 2.0.4
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) માં લાઇન 455 પર વ્યાખ્યાયિત છે.


## Returns {#returns}
જો DNS યોગ્ય રીતે સેટઅપ થયેલ છે કે નહીં.
