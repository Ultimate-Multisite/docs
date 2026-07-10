---
id: wu_country_get_administrative_division_name
title: ଫିଲ୍ଟର୍ - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

ଦେଶର ପ୍ରଶାସନିକ ଉପବିଭାଗଗୁଡ଼ିକର ସୁନ୍ଦର ନାମ ଫେରାଇଦିଏ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $name | `string` | ବିଭାଗର ନାମ। ସାଧାରଣତଃ state, province, region ଇତ୍ୟାଦି ପରି କିଛି। |
| $country_code | `string` | ଦେଶ ପାଇଁ ଦୁଇ-ଅକ୍ଷରର ISO କୋଡ୍। |
| $state_code | `string` | state ପାଇଁ ଦୁଇ-ଅକ୍ଷରର ISO କୋଡ୍। |
| $ucwords | `bool` | ଯଦି ଆମେ ଶବ୍ଦଗୁଡ଼ିକୁ ବଡ଼ ଅକ୍ଷରରେ କରୁ। |
| $current_country | `\WP_Ultimo\Country\Country` | ବର୍ତ୍ତମାନ classର instance। |

### ଆରମ୍ଭରୁ {#since}

- 2.0.11
### ଉତ୍ସ {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ରେ 250 ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ


## ଫେରାଇଦିଏ {#returns}
ପରିବର୍ତ୍ତିତ ବିଭାଗର ନାମ।
