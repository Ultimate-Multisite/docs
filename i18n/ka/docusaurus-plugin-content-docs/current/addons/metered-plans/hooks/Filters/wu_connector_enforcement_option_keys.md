---
id: wu_connector_enforcement_option_keys
title: ფილტრი - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# ფილტრი: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

ფილტრავს AI პროვაიდერის პარამეტრების გასაღებების სიას, რომლებიც მთავარი საიტიდან იძულებით გამოიყენება.

დაამატეთ პარამეტრების გასაღებები მორგებული ან მესამე მხარის AI პროვაიდერის plugin-ებისთვის, რათა მათი პარამეტრებიც მემკვიდრეობით გადმოვიდეს მთავარი საიტიდან ქვესაიტებზე.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $keys | `string[]` | იძულებით გამოსაყენებელი პარამეტრის გასაღებების სახელები (უკვე მოიცავს დინამიკურად აღმოჩენილ connector-ის გასაღებებს და EXTRA_PROVIDER_OPTIONS-ს). |

### ვერსიიდან {#since}

- 1.2.0
### წყარო {#source}

განსაზღვრულია [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206)-ში, ხაზზე 206
