---
id: wp_ultimo_skip_network_active_check
title: Filtr - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtr: wp_ultimo_skip_network_active_check

Pozwala deweloperom na pominięcie sprawdzenia aktywacji sieci.

Jest to przydatne, gdy używasz ustawień niestandardowych opartych na Composerze, takich jak Bedrock, gdzie standardem jest używanie pluginów jako mu-plugins.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Czy mamy pominąć sprawdzenie, czy nie. Domyślnie ustawione na false. |

### Od

- 2.0.0
### Źródło

Zdefiniowane w [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) w linii 272

## Zwraca
`true`, jeśli chcesz pominąć sprawdzenie, w przeciwnym razie `false`.
