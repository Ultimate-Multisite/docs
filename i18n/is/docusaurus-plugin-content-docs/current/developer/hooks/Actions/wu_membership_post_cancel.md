---
id: wu_membership_post_cancel
title: Aðgerð - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Aðgerð: wu_membership_post_cancel {#action-wumembershippostcancel}

Keyrist eftir að aðildinni er sagt upp.

Þetta kveikir á uppsagnartölvupóstinum.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $membership_id | `int` | Auðkenni aðildarinnar. |
| $membership | `\WP_Ultimo\Models\Membership` | Aðildarhlutur. |

### Síðan {#since}

- 2.0
### Uppruni {#source}

Skilgreint í [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) í línu 2290
