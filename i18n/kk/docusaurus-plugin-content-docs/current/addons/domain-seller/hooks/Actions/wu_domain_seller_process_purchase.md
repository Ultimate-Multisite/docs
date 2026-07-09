---
id: wu_domain_seller_process_purchase
title: Әрекет - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Әрекет: wu_domain_seller_process_purchase

Төлем жасау аяқталғаннан кейін доменді сатып алу өңделіп жатқанда іске қосылады.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Төлем нысаны. |
| $checkout_data | `array&lt;string,mixed&gt;` | Тіркелу пішінінен алынған толық checkout деректері. |

### Бастап

- 2.0.0
### Дереккөз

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ішінде 246-жолда анықталған.
