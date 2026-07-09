---
id: wu_make_primary_domain_redirect_url
title: Parzûn - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Parzûn: wu_make_primary_domain_redirect_url

URL-ya vegerandinê piştî ku domain wekî sereke tê kirin parzûn dike.

Destûr dide pêşdebirvanan ku cihê vegerandina bikarhêneran piştî ku domain bi serkeftî wekî sereke danîn, xweş bikin. Bi berdestî, an ber bi URL-ya heyî ya li ser malpera sereke ve vedigere, an jî ber bi URL-ya admin a malpera ku tê guherandin ve.

## Parametre

| Nav | Cure | Danasîn |
|------|------|-------------|
| $redirect_url | `string` | URL-ya vegerandinê ya berdest. An URL-ya heyî ye (heke malpera sereke be) an jî URL-ya admin a malpera heyî ye. |
| $current_site | `int` | ID-ya malpera ku domain-a wê wekî sereke tê kirin. |
| $domain | `\Domain` | Objeya domain-ê ku wekî sereke hat kirin. |
| $old_primary_domains | `array` | Rêzeya ID-yên domain-ên ku berê sereke bûn. |

### Ji guhertoya

- 2.0.0
### Çavkanî

Di [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) li rêza 639 hatî pênasekirin


## Vedigere
URL-ya vegerandinê ya parzûnkirî.
