---
id: wu_multi_tenancy_init
title: მოქმედება - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Action: wu_multi_tenancy_init {#action-wumultitenancyinit}

იშვება მას შემდეგ, რაც Multi-Tenancy addon სრულად ინიციალიზდება.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | addon-ის ინსტანცია. phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ არის სტანდარტული prefix WP Ultimo-ისთვის. |

### ვერსიიდან {#since}

- 1.0.0
### წყარო {#source}

განსაზღვრულია [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124)-ში, 124-ე ხაზზე
