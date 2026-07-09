---
id: wu_magic_link_enforce_ip
title: Filtre - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtre: wu_magic_link_enforce_ip

Filtra si s'ha d'aplicar la verificació de l'adreça IP.

Estableix-ho a false per permetre que els tokens funcionin des de xarxes diferents. Això redueix la seguretat però augmenta la usabilitat (p. ex., per a usuaris mòbils que canvien de xarxa).

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $enforce | `bool` | Si s'ha d'aplicar la coincidència de l'adreça IP. |

### Des de

- 2.0.0
### Font

Definit a [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) a la línia 422
