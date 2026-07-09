---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

አንድ ዶሜን በተሳካ ሁኔታ ከተመዘገበ በኋላ ይሰራል።

## መለኪያዎች {#parameters}

| Name | Type | መግለጫ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ምዝገባውን ያስቀዳው ክፍያ። |
| $registration_data | `array<string,mixed>` | የምዝገባ መረጃ (domain_name, provider_id, years, expiry_date, ወዘተ)። |
| $result | `array<string,mixed>` | በሪጅስትራሩ የተመለሰ ጥሬ ውጤት አርሬይ። |

### ከ {#since}

- 2.0.0
### ምንጭ {#source}

በ[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) በ1204ኛው መስመር ተገልጿል።
