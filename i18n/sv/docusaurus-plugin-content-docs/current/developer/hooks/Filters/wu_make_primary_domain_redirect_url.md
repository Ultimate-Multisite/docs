---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtrerar omdirigerings-URL:en efter att ett domän har gjorts primärt.

Låter utvecklare anpassa vart användare omdirigeras efter att de framgångsrikt har ställt in ett domän som primärt. Standardmässigt omdirigeras användaren till den aktuella URL:en på huvudwebbplatsen, eller till administrations-URL:en för den webbplats som modifieras.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $redirect_url | `string` | Den standardmässiga omdirigerings-URL:en. Antingen den aktuella URL:en (om det är huvudwebbplatsen) eller administrations-URL:en för den aktuella webbplatsen. |
| $current_site | `int` | ID:t för den webbplats vars domän görs primär. |
| $domain | `\Domain` | Domänobjektet som gjordes primärt. |
| $old_primary_domains | `array` | Array av ID:n för domäner som tidigare var primära. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) på rad 639


## Returnerar {#returns}
Den filtrerade omdirigerings-URL:en.
