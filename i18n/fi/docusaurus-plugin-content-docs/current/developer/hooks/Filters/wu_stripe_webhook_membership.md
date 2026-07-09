---
id: wu_stripe_webhook_membership
title: Suodatin - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Suodatin: wu_stripe_webhook_membership

Suodattaa tähän webhookiin liittyvän jäsenyystietueen.

Tämä suodatin otettiin käyttöön sellaisten ristiriitojen vuoksi, joita voi syntyä, kun samaa Stripe-asiakasta käytetään eri sivustoilla.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Jäsenyysobjekti. |
| $event | `\Stripe\Event` | Vastaanotettu tapahtuma. |

### Lähde

Määritelty tiedostossa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) rivillä 2035
