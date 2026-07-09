---
id: wu_membership_pre_cancel
title: Eylem - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# Action: wu_membership_pre_cancel {#action-wumembershipprecancel}

Üyelik iptal edilmeden önce tetiklenir.

## Parametreler {#parameters}

| Adı | Tür | Açıklama |
|------|------|-------------|
| $membership_id | `int` | Üyelik kimliği. |
| $membership | `\WP_Ultimo\Models\Membership` | Üyelik nesnesi. |

### Versiyon {#since}

- 2.0
### Kaynak {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) dosyasının 2267. satırında tanımlanmıştır.
