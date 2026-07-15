---
id: wu_domain_renewal_failed
title: Гамәл - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Гамәл: wu_domain_renewal_failed

Доменны озайту омтылышы уңышсыз тәмамланганнан соң эшли.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Озайтуны башлап җибәргән түләү. |
| $renewal_data | `array&lt;string,mixed&gt;` | Озайту метамәгълүматлары (domain_name, years һ.б.). |
| $error_message | `string` | Теркәүчедән кеше укырлык хата хәбәре. |

### Версиядән башлап {#since}

- 2.0.0
### Чыганак {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) эчендә, 630 нчы юлда билгеләнгән.
