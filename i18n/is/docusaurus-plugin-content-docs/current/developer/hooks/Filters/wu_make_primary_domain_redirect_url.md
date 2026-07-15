---
id: wu_make_primary_domain_redirect_url
title: Sía - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Sía: wu_make_primary_domain_redirect_url

Síar endurbeiningar-URL eftir að lén er gert að aðalléni.

Gerir þróurum kleift að sérsníða hvert notendur eru endurbeindir eftir að tókst að stilla lén sem aðallén. Sjálfgefið er að endurbeina á núverandi URL á aðalvefnum, eða á admin-URL vefsins sem verið er að breyta.

## Færibreytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $redirect_url | `string` | Sjálfgefið endurbeiningar-URL. Annaðhvort núverandi URL (ef aðalvefur) eða admin-URL núverandi vefs. |
| $current_site | `int` | Auðkenni vefsins sem lén er verið að gera að aðalléni fyrir. |
| $domain | `\Domain` | Lénshluturinn sem var gerður að aðalléni. |
| $old_primary_domains | `array` | Fylki með auðkennum léna sem voru áður aðallén. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) á línu 639


## Skilar {#returns}
Síað endurbeiningar-URL.
