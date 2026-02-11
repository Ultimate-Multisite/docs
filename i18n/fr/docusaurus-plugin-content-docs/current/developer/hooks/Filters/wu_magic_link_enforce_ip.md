---
id: wu_magic_link_enforce_ip
title: Filtre - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filtrer si l'adressage IP doit être vérifié.

Définissez sur false pour permettre aux jetons de fonctionner depuis différents réseaux. Cela réduit la sécurité mais augmente l'utilisabilité (par ex., pour les utilisateurs mobiles changeant de réseau).

## Parameters

| Nom | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Si l'adressage IP doit être vérifié. |

### Depuis

- 2.0.0

### Source

Défini dans [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) à la ligne 422
