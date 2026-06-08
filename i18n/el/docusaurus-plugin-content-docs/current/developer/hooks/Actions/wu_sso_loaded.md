---
id: wu_sso_loaded
title: Δράση - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

Επιτρέπει στους developers plugins να προσθέσουν επιπλέον hooks, αν χρειαστεί.

Αυτό πρέπει να καθυστερήσει μέχρι το `init`, καθώς το SSO είναι κάτι που εκτελείται στο `sunrise`.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | Η κλάση SSO. |

### Since

- 2.0.0
### Source

Ορίζεται στο [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) στην γραμμή 285
