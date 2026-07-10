---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Üyelik yenilemesi yapıldıktan sonra tetiklenir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Ayarlanacak yeni bitiş tarihi. |
| $membership_id | `int` | Üyeliğin kimliği (ID'si). |
| $membership | `\Membership` | Üyelik nesnesi. |

### Versiyon {#since}

- 2.0
### Kaynak {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) dosyasında 2235. satırda tanımlanmıştır.
