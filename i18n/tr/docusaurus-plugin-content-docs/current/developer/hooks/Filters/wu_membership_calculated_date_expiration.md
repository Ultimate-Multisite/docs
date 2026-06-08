---
id: wu_membership_calculated_date_expiration
title: Filtre - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

Hesaplanan son kullanma tarihini filtreler.

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $expiration | `string` | MySQL formatında hesaplanmış son kullanma tarihi. |
| $membership_id | `int` | Üyelik kimliği (ID). |
| $membership | `\WP_Ultimo\Models\Membership` | Üyelik nesnesi. |

### Kullanılabilir

- 2.0
### Kaynak

1309. satırda [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) içinde tanımlanmıştır.
