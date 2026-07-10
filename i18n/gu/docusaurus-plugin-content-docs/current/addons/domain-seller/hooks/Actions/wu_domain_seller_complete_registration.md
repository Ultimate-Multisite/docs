---
id: wu_domain_seller_complete_registration
title: ક્રિયા - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

જ્યારે કોઈ પેમેન્ટની સ્થિતિ એવી રીતે બદલાય કે જેનાથી ડોમેન રજીસ્ટ્રેશન શરૂ થવું જોઈએ, ત્યારે આ એક્શન ટ્રિગર થાય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | પેમેન્ટ ઓબ્જેક્ટ. |
| $old_status | `string` | ટ્રાન્ઝિશન પહેલાની પેમેન્ટની જૂની સ્થિતિ. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) માં લાઇન 266 પર વ્યાખ્યાયિત છે.
