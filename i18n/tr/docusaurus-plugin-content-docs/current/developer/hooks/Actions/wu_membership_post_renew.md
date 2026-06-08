---
id: wu_membership_post_renew
title: Eylem - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Eylem: wu_membership_post_renew

Üyelik yenilemesinden sonra tetiklenir.

## Parametreler

| Adı | Tip | Açıklama |
|------|------|-------------|
| $expiration | `string` | Ayarlanacak yeni bitiş tarihi. |
| $membership_id | `int` | Üyeliğin kimliği (ID). |
| $membership | `\Membership` | Üyelik nesnesi. |

### Sürüm

- 2.0
### Kaynak

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) dosyasının 2235. satırında tanımlanmıştır.
