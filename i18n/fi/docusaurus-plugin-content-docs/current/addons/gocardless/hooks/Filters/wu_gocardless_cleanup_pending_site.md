---
id: wu_gocardless_cleanup_pending_site
title: Suodatin - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Käynnistyy ennen orvoksi jääneen odottavan sivuston poistamista peruutetulle GoCardless-jäsenyydelle.

Palauta tästä suodattimesta false estääksesi poistamisen.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $blog_id | `int` | Odottavan sivuston WordPress-blogin ID. |
| $membership | `\WP_Ultimo\Models\Membership` | Peruutettu jäsenyys. |
| $old_status | `string` | Tila ennen peruutusta. |

### Alkaen

- 2.0.0
### Lähde

Määritelty tiedostossa [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) rivillä 1086
