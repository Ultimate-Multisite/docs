---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Ermöglicht Entwicklern, die Netzwerkausführungsprüfung zu umgehen.

Dies ist nützlich, wenn composer-basierte und andere benutzerdefinierte Setups verwendet werden, wie zum Beispiel Bedrock, bei denen die Verwendung von Plugins als mu-plugins die Norm ist.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Ob die Prüfung übersprungen werden soll oder nicht, standardmäßig false. |

### Since

- 2.0.0

### Source

Defined in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) at line 272

## Returns

true, wenn Sie die Prüfung überspringen möchten, sonst false.
