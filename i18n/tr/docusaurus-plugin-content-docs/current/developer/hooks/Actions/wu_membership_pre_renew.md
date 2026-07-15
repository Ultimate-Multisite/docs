---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Eylem: wu_membership_pre_renew

Üyelik yenileme işleminden önce tetiklenir.

## Parametreler {#parameters}

| Adı | Tip | Açıklama |
|------|------|-------------|
| $expiration | `string` | Ayarlanacak yeni bitiş tarihi. |
| $membership_id | `int` | Üyeliğin kimliği (ID). |
| $membership | `\Membership` | Üyelik nesnesi. |

### Sürüm {#since}

- 2.0
### Kaynak {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) adresinde 2204. satırda tanımlanmıştır.
