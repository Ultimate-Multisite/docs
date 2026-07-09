---
id: wu_make_primary_domain_redirect_url
title: Nzacha - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Na-enyocha redirect URL mgbe emechara domain ka ọ bụrụ primary.

Na-enye ndị mmepe ohere ịhazi ebe a ga-eziga ndị ọrụ mgbe ha mechara tọọ domain ka ọ bụrụ primary nke ọma. Na ndabara, ọ na-eziga gaa na URL dị ugbu a na saịtị isi, ma ọ bụ gaa na admin URL nke saịtị a na-eme mgbanwe na ya.

## Parameters

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $redirect_url | `string` | Redirect URL ndabara. Ma URL dị ugbu a (ma ọ bụrụ saịtị isi) ma ọ bụ admin URL nke saịtị dị ugbu a. |
| $current_site | `int` | ID nke saịtị nke a na-eme domain ya ka ọ bụrụ primary. |
| $domain | `\Domain` | Ihe domain e mere ka ọ bụrụ primary. |
| $old_primary_domains | `array` | Array nke ID nke domain ndị bụbu primary. |

### Kemgbe

- 2.0.0
### Isi mmalite

Akọwara ya na [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) na ahịrị 639


## Nlaghachi
Redirect URL a nọrọ enyocha.
