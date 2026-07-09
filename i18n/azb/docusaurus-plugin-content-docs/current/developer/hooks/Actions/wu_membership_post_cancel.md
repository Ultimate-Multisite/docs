---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

Üyelik iptal edildikten sonra tetiklenir.

Bu, iptal e-postasını gönderme işlemini tetikler.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | Üyeliğin kimliği (ID). |
| $membership | `\WP_Ultimo\Models\Membership` | Üyelik nesnesi. |

### Versiyon {#since}

- 2.0
### Kaynak {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) dosyasının 2290. satırında tanımlanmıştır.
