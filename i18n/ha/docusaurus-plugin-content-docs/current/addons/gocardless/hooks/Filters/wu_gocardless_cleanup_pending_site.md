---
id: wu_gocardless_cleanup_pending_site
title: Tacewa - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Tacewa: wu_gocardless_cleanup_pending_site

Yana aiki kafin share rukunin yanar gizo mai jiran aiki maraya don membobincin GoCardless da aka soke.

Mayar da false daga wannan tacewa don hana sharewa.

## Sigogi {#parameters}

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $blog_id | `int` | ID na blog na WordPress na rukunin yanar gizo mai jiran aiki. |
| $membership | `\WP_Ultimo\Models\Membership` | Membobincin da aka soke. |
| $old_status | `string` | Matsayin kafin sokewa. |

### Tun daga {#since}

- 2.0.0
### Tushe {#source}

An ayyana shi a cikin [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) a layi na 1086
