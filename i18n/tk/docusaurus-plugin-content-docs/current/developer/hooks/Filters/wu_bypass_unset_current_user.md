---
id: wu_bypass_unset_current_user
title: Süzgüç - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Döredijilere häzirki ulanyjyny unset edýän koddan aýlanyp geçmäge rugsat beriň.

Null-dan başga islendik zady gaýtarmak, häzirki ulgama giren ulanyjynyň unset edilmeginden aýlanyp geçer. Bu käbir ýagdaýlarda peýdaly bolup biler, mysal üçin, admin panelleri hökmünde ulanylýan aşaky saýtlar bilen işlenende.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $null_or_bypass | `mixed` | Dowam etmek üçin null, aýlanyp geçmek üçin bolsa başga islendik zat. |
| $current_user | `false\|\WP_User` | Häzirki ulanyjy obýekti. |

### Şondan bäri {#since}

- 2.0.11
### Çeşme {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) içinde, 221-nji setirde kesgitlenen


## Gaýtaryşlar {#returns}
