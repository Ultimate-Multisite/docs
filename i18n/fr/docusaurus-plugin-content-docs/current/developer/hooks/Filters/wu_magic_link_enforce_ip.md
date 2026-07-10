---
id: wu_magic_link_enforce_ip
title: Filtre - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtre : wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Filtre permettant de déterminer s’il faut appliquer la vérification de l’adresse IP.

Définissez sur false pour permettre aux tokens de fonctionner depuis différents réseaux. Cela réduit la sécurité, mais augmente la facilité d’utilisation (par exemple, pour les utilisateurs mobiles qui changent de réseau).

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### Depuis {#since}

- 2.0.0
### Source {#source}

Défini dans [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) à la ligne 422
