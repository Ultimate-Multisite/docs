---
id: wu_sso_url
title: Sivana - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Sivana: wu_sso_url

Manivana ireo SSO URLs novokarina alohan'ny hamerenana azy ireo ho an'ny hetsiky ny mpanjifa miampita sehatra.

Ampiasao ity sivana ity rehefa mila manampy tontolo azo itokisana amin'ny rohy SSO an'ny sovereign-tenant ny fampidirana iray, na manolo ny broker URL nefa mitahiry ny fanamarinana token an'ny Ultimate Multisite.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | SSO URL novokarina. |
| $user | `WP_User` | Mpampiasa izay hohamarinin'ny fitsidihana SSO. |
| $site_id | `int` | ID-n'ny tranonkala kendrena ho an'ny fitsidihana. |
| $redirect_to | `string` | URL aleha aorian'ny fanamarinana SSO mahomby. |

### Nanomboka

- 2.13.0

### Loharano

Voafaritra ao amin'ny `inc/sso/class-sso.php`.


## Mamerina

SSO URL voasivana.
