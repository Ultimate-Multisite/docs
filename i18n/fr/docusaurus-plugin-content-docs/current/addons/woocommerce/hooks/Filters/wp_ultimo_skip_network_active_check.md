---
id: wp_ultimo_skip_network_active_check
title: Filtre - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtre: wp_ultimo_skip_network_active_check

Permettre aux développeurs de contourner la vérification d'activation réseau.

Ceci est utile lorsqu'on utilise des configurations basées sur Composer et d'autres configurations personnalisées, comme Bedrock, par exemple, où l'utilisation de plugins en tant que mu-plugins est la norme.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Si nous devons ignorer la vérification ou non, par défaut false. |

### Depuis

- 2.0.0

### Source

Défini dans [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) à la ligne 272

## Retour

true si vous souhaitez ignorer la vérification, false sinon.
