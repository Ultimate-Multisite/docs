---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Repliceren van de originele WP-filter hier, voor de zekerheid.

Filtert de lijst met sites waar een gebruiker deel van uitmaakt.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Een array van site-objecten die behoren tot de gebruiker. |
| $user_id | `int` | Gebruikers-ID. |
| $all | `bool` | Of de geretourneerde sites-array alle sites moet bevatten, inclusief die gemarkeerd als 'deleted', 'archived' of 'spam'. Standaard false. |

### Since

- 2.0.11

### Source

Defined in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) at line 851
