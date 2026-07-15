---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Üyelik iptal edildiğinde çalışır.

Bu, iptal e-postasını tetikler.

## Parametreler {#parameters}

| Adı | Tip | Açıklama |
|------|------|-------------|
| $membership_id | `int` | Üyelik kimliği. |
| $membership | `\WP_Ultimo\Models\Membership` | Üyelik nesnesi. |

### Versiyon {#since}

- 2.0
### Kaynak {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) dosyasında 2290. satırda tanımlanmıştır.
