---
id: wu_gocardless_cleanup_pending_site
title: Sefa - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Fyuluta: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Imayambitsidwa musanachotse site yoyembekezera yosiyidwa ya umembala wa GoCardless womwe waletsedwa.

Bwezerani false kuchokera ku fyulutayi kuti muletse kuchotsa.

## Magawo {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $blog_id | `int` | ID ya blog ya WordPress ya site yoyembekezera. |
| $membership | `\WP_Ultimo\Models\Membership` | Umembala womwe waletsedwa. |
| $old_status | `string` | Mkhalidwe usanachitike kuletsa. |

### Kuyambira {#since}

- 2.0.0
### Gwero {#source}

Zafotokozedwa mu [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) pa mzere 1086
