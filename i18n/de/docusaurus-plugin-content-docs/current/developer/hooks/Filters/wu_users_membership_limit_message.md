---
id: wu_users_membership_limit_message
title: >-
  ---

  title: "Filter - wu_users_membership_limit_message"

  description: "Filter für die Mitgliedschaftsgrenznachricht."

  ---


  ## Filter: wu_users_membership_limit_message


  Dieser Filter ermöglicht es Ihnen, die Nachricht zu ändern, die angezeigt
  wird, wenn ein Benutzer die Mitgliedschaftsgrenze erreicht.


  **Parameter**


  - `$message` (string) – Die Standardnachricht.

  - `$user_id` (int) – Die ID des Benutzers.

  - `$limit` (int) – Die maximale Anzahl erlaubter Mitgliedschaften.


  **Rückgabe**


  - string – Die modifizierte Nachricht.
sidebar_label: wu_users_membership_limit_message
_i18n_hash: a83690f83973b787f6a2a44c838327d2
---
# Filter: wu_users_membership_limit_message

Ermöglicht Entwicklern, die Nachricht über die Mitglieder-Benutzergrenze zu ändern.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $message | `string` | Die Nachricht, die auf dem Bildschirm ausgegeben wird. |

### Quelle

Definiert in [`inc/limits/class-customer-user-role-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-customer-user-role-limits.php#L72) an Zeile 72
