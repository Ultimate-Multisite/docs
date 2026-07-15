---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filter die omleidings-URL nadat 'n domein primêr gemaak is.

Dit laat ontwikkelaars toe om aan te pas waar gebruikers omgeleid word nadat 'n domein suksesvol as primêr gestel is. Standaard word dit omgeleid na die huidige URL op die hoofwebwerf, of na die admin-URL van die webwerf wat gewysig word.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $redirect_url | `string` | Die standaard omleidings-URL. Dit is óf die huidige URL (indien die hoofwebwerf) óf die admin-URL van die huidige webwerf. |
| $current_site | `int` | Die ID van die webwerf wie se domein primêr gemaak word. |
| $domain | `\Domain` | Die domein-objek wat primêr gemaak is. |
| $old_primary_domains | `array` | 'n Array van ID's van domeine wat voorheen primêr was. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Bepaald in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) by lyn 639


## Gee terug {#returns}
Die gefilterde omleidings-URL.
