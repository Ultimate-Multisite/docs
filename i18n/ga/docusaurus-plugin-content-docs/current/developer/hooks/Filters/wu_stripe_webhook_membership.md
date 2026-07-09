---
id: wu_stripe_webhook_membership
title: Scagaire - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Scagaire: wu_stripe_webhook_membership

Scagann sé an taifead ballraíochta a bhaineann leis an webhook seo.

Tugadh an scagaire seo isteach mar gheall ar choimhlintí a d’fhéadfadh teacht chun cinn nuair a úsáidtear an custaiméir Stripe céanna ar shuíomhanna éagsúla.

## Paraiméadair

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | An oibiacht ballraíochta. |
| $event | `\Stripe\Event` | An eachtra a fuarthas. |

### Foinse

Sainithe in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ag líne 2035
