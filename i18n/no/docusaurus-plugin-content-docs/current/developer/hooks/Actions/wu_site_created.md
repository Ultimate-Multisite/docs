---
id: wu_site_created
title: Action - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created

Utløses når et nettsted blir opprettet for første gang.

Utløses ikke hvis det blir duplisert fra en mal.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $data | `array` | Objektdataene som skal lagres. |
| $site | `\Site` | Objektinstansen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) på linje 1652
