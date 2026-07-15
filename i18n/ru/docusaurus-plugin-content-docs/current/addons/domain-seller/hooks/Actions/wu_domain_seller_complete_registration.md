---
id: wu_domain_seller_complete_registration
title: Действие - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Действие: wu_domain_seller_complete_registration

Срабатывает, когда платеж переходит в статус, который должен инициировать регистрацию домена.

## Параметры {#parameters}

| Имя | Тип | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Объект платежа. |
| $old_status | `string` | Предыдущий статус платежа до перехода. |

### Начиная с {#since}

- 2.0.0
### Источник {#source}

Определен в [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) в строке 266
