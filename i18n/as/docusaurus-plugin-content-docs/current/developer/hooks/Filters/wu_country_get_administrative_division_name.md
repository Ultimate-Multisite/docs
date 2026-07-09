---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

দেশৰ প্ৰশাসনিক উপ-বিভাগসমূহৰ ভাল নাম फिৰিকা কৰে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | বিভাগটোৰ নাম। সাধাৰণতে ৰাজ্য, প্ৰোভিেন্স, অঞ্চল আদিৰ দৰে কিছু। |
| $country_code | `string` | দেশৰ দু-অক্ষৰৰ ISO কোড। |
| $state_code | `string` | ৰাজ্যৰ দু-অক্ষৰৰ ISO কোড। |
| $ucwords | `bool` | যদি আমি শব্দবোৰক ডাঙৰ আখৰ কৰোঁ। |
| $current_country | `\WP_Ultimo\Country\Country` | বৰ্তমানৰ ক্লাছৰ এটা প্ৰতিলিপি (Instance of the current class)। |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ফাইলৰ ২৫০ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।

## Returns {#returns}
সলনি কৰা বিভাগটোৰ নাম।
