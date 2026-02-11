---
id: retrieve_password_message
title: Filtre - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtre : retrieve_password_message

Filtre le corps du message du courriel de réinitialisation du mot de passe.

## Paramètres

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Message de courriel par défaut. |
| $key | `string` | La clé d'activation. |
| $user_login | `string` | Le nom d'utilisateur de l'utilisateur. |
| $user_data | `\WP_User` | Objet WP_User. |

### Depuis

- 2.8.0
- 4.1.0: Ajout des paramètres <code>$user_login</code> et <code>$user_data</code>.

### Source

Défini dans [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) à la ligne 149

## Renvoie

Message de courriel par défaut.
