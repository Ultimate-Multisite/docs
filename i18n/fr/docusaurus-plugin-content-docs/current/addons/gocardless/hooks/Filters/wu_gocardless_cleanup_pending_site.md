---
id: wu_gocardless_cleanup_pending_site
title: Filtre - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtre : wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Se déclenche avant de supprimer un site en attente orphelin suite à l'annulation d'un abonnement GoCardless.

Retournez `false` depuis ce filtre pour empêcher la suppression.

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $blog_id | `int` | L'ID du blog WordPress du site en attente. |
| $membership | `\WP_Ultimo\Models\Membership` | L'abonnement annulé. |
| $old_status | `string` | Le statut avant l'annulation. |

### Depuis {#since}

- 2.0.0
### Source {#source}

Défini dans [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) à la ligne 1086
