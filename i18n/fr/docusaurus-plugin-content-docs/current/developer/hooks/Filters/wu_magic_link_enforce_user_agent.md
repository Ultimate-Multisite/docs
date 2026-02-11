---
id: wu_magic_link_enforce_user_agent
title: Filtre - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filtre: wu_magic_link_enforce_user_agent

Filtre pour déterminer s'il faut appliquer la vérification de l'agent utilisateur.

Définissez sur false pour permettre aux jetons de fonctionner sur différents navigateurs/appareils. Cela réduit la sécurité mais augmente l'utilisabilité.

## Paramètres

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | S'il faut appliquer la correspondance de l'agent utilisateur. |

### Depuis

- 2.0.0

### Source

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410
