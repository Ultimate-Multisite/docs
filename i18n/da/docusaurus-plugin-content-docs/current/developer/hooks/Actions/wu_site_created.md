---
id: wu_site_created
title: Handling - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created

Udløses efter et site er oprettet for første gang.

Udløses ikke, hvis det er duplikeret fra en skabelon.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $data | `array` | De objektdata, der vil blive gemt. |
| $site | `\Site` | Objektinstansen. |

### Siden

- 2.0.0
### Kilde

Defineret i [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) på linje 1652
