---
id: wp_ultimo_skip_network_active_check
title: Filtrs - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtrs: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Ļauj izstrādātājiem īsslēgt tīkla aktivizācijas pārbaudi.

Tas ir noderīgi, izmantojot composer balstītus un citus pielāgotus iestatījumus, piemēram, Bedrock, kur pluginu izmantošana kā mu-plugins ir norma.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Vai pārbaude jāizlaiž vai nē; noklusējums ir false. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) 272. rindā


## Atgriež {#returns}
true, ja vēlaties izlaist pārbaudi, citādi false.
