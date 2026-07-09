---
id: wu_domain_transfer_completed
title: Գործողություն - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Գործողություն՝ wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Գործարկվում է դոմենի փոխանցումն ավարտվելուց հետո։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Դոմենի օբյեկտը։ |
| $transfer_data | `array` | Փոխանցման ավարտի տվյալները։ |

### Սկսած {#since}

- 2.1.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690)-ում՝ 690-րդ տողում
