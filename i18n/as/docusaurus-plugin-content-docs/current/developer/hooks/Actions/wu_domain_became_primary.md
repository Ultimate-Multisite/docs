---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

এই action-টো তেতিয়া trigger হয় যেতিয়া কোনো domain এটা site-ৰ মukhya domain হৈ পৰে।

এই action-টো তেতিয়া trigger হয় যেতিয়া এটা domain-ৰ `primary_domain` flag-টো `true` কৰা হয়—হয় এটা নতুন primary domain বনাৰ সময়ত, নহ'লে এটা বিদ্যমান domain-ক primary কৰাৰ সময়ত।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | যি domain-টো primary হৈ পৰে। |
| $blog_id | `int` | প্ৰভাৱিত site-টোৰ blog ID। |
| $was_new | `bool` | এইটো এটা নতুন বনা পোৱা domain নেকি। |

### Since

- 2.0.0
### Source

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ফাইলৰ লাইন ৫৬০ নম্বৰত সংজ্ঞায়িত।
