---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filtert het onderwerp van de e-mail voor het resetten van het wachtwoord.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $title | `string` | Standaard e-mailtitel. |
| $user_login | `string` | De gebruikersnaam voor de gebruiker. |
| $user_data | `\WP_User` | WP_User object. |

### Since

- 2.8.0
- 4.4.0: Toegevoegd de <code>$user_login</code> en <code>$user_data</code> parameters.

### Source

Gedefinieerd in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) op regel 135

## Returns
Standaard e-mailtitel.
