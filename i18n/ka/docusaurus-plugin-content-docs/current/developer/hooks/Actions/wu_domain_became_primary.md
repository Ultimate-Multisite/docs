---
id: wu_domain_became_primary
title: მოქმედება - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

ეშვება, როდესაც დომენი საიტისთვის ძირითადი დომენი ხდება.

ეს action ამოქმედდება, როდესაც დომენის primary_domain flag დაყენდება true-ზე, ან ახალი ძირითადი დომენის შექმნისას, ან არსებული დომენის განახლებისას, რათა ის ძირითადი გახდეს.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | დომენი, რომელიც ძირითადი გახდა. |
| $blog_id | `int` | დაზარალებული საიტის blog ID. |
| $was_new | `bool` | არის თუ არა ეს ახლად შექმნილი დომენი. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560)-ში, ხაზზე 560
