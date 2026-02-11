---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filter of extra wachtwoordregels moeten worden afgedwongen.

When true, enforces minimum length and character requirements. Automatically enabled for "Super Strong" setting or when Defender Pro's Strong Password feature is active.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $enforce_rules | `bool` | Of extra regels moeten worden afgedwongen. |
| $strength_setting | `string` | De admin instelling waarde. |
| $defender_active | `bool` | Of Defender Pro Strong Password actief is. |

### Sinds

- 2.4.0

### Bron

Gedefinieerd in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
