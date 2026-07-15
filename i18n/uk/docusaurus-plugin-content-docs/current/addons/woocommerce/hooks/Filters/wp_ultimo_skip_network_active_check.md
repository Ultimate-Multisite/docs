---
id: wp_ultimo_skip_network_active_check
title: Фільтр - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Фільтр: wp_ultimo_skip_network_active_check

Дозволяє розробникам обійти перевірку активації мережі.

Це корисно, коли ви використовуєте налаштування на основі Composer або інші нестандартні конфігурації, як-от Bedrock, де звичайним є використання плагінів як mu-плагінів.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Чи потрібно нам пропустити перевірку, чи ні. За замовчуванням — `false`. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено в [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) на рядку 272


## Returns {#returns}
`true`, якщо ви хочете пропустити перевірку, інакше `false`.
