---
id: wu_membership_pre_renew
title: Aksi - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Tumindak: wu_membership_pre_renew {#action-wumembershipprerenew}

Dipicu sadurunge perpanjangan keanggotaan.

## Paramèter {#parameters}

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $expiration | `string` | Tanggal kadaluwarsa anyar sing bakal disetel. |
| $membership_id | `int` | ID keanggotaan. |
| $membership | `\Membership` | Objek keanggotaan. |

### Wiwit {#since}

- 2.0
### Sumber {#source}

Ditetepake ing [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) ing baris 2204
