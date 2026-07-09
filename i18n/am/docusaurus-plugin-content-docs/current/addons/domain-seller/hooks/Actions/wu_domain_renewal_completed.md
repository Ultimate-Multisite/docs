---
id: wu_domain_renewal_completed
title: ድርጊት - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

ዶሜን በተሳካ ሁኔታ እንደገና ከተፈረመ በኋላ ይሠራል።

## መለኪያዎች {#parameters}

| Name | Type | መግለጫ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | እድሳትን የፈጠረውን ክፍያ። |
| $renewal_data | `array<string,mixed>` | የድጋሚ ክፍያ ሜታዳታ (የዶሜን ስም፣ ዓመታት፣ የደንበኛ መለያ ቁጥር ወዘተ)። |
| $result | `array<string,mixed>` | በሪጅስትራሩ የተመለሰ ጥሬው ውጤት አርሬይ፣ አዲሱን የማብቂያ ቀን ጨምሮ። |

### ከ {#since}

- 2.0.0
### ምንጭ {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ላይ በ594ኛው መስመር ተገልጿል።
