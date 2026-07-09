---
id: wp_ultimo_skip_network_active_check
title: Filtru - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtru: wp_ultimo_skip_network_active_check

Permite dezvoltatorilor să scurtcircuiteze verificarea activării în rețea.

Acest lucru este util când se folosesc configurații bazate pe composer și alte configurații personalizate, cum ar fi Bedrock, de exemplu, unde folosirea pluginurilor ca mu-plugins este norma.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Dacă ar trebui să sărim peste verificare sau nu, implicit false. |

### Începând cu

- 2.0.0
### Sursă

Definit în [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) la linia 272


## Returnează
true dacă dorești să sari peste verificare, false în caz contrar.
