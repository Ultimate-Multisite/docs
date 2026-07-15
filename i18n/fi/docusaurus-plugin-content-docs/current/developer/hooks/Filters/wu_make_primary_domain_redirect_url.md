---
id: wu_make_primary_domain_redirect_url
title: Suodatin - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtteri: wu_make_primary_domain_redirect_url

Suodattaa uudelleenohjauksen URL-osoitteen sen jälkeen, kun domain on tehty ensisijaiseksi.

Antaa kehittäjien mukauttaa, minne käyttäjät uudelleenohjataan sen jälkeen, kun domain on onnistuneesti asetettu ensisijaiseksi. Oletuksena uudelleenohjaa pääsivuston nykyiseen URL-osoitteeseen tai muokattavan sivuston admin-URL-osoitteeseen.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $redirect_url | `string` | Uudelleenohjauksen oletus-URL-osoite. Joko nykyinen URL-osoite (jos pääsivusto) tai nykyisen sivuston admin-URL-osoite. |
| $current_site | `int` | Sen sivuston ID, jonka domainista tehdään ensisijainen. |
| $domain | `\Domain` | Domain-objekti, joka tehtiin ensisijaiseksi. |
| $old_primary_domains | `array` | Taulukko niiden domainien ID:istä, jotka olivat aiemmin ensisijaisia. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) rivillä 639


## Palauttaa {#returns}
Suodatetun uudelleenohjauksen URL-osoitteen.
