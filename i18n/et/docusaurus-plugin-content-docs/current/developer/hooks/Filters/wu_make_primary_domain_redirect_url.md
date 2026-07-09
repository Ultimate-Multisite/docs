---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Filtreerib ümbersuunamise URL-i pärast domeeni primary'ks määramist.

Võimaldab arendajatel kohandada, kuhu kasutajad pärast domeeni edukat primary'ks seadmist ümber suunatakse. Vaikimisi suunatakse ümber põhisaidi praegusele URL-ile või muudetava saidi admin URL-ile.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $redirect_url | `string` | Vaikimisi ümbersuunamise URL. Kas praegune URL (kui põhisaidil) või praeguse saidi admin URL. |
| $current_site | `int` | Selle saidi ID, mille domeeni primary'ks määratakse. |
| $domain | `\Domain` | Domeeni objekt, mis määrati primary'ks. |
| $old_primary_domains | `array` | Nende domeenide ID-de massiiv, mis olid varem primary. |

### Alates versioonist {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) real 639


## Tagastab {#returns}
Filtreeritud ümbersuunamise URL.
