---
id: wu_core_installer_install_sunrise
title: Filter - wu_core_installer_install_sunrise
sidebar_label: wu_core_installer_install_sunrise
_i18n_hash: 9750f0fbfe9f02249e4e1d17e585bdb6
---
# Filter: wu_core_installer_install_sunrise

Låter värdleverantörer installera konstanter på ett annat sätt.

Om du returnerar `true` förhindrar det att Ultimate Multisite försöker skriva till `wp-config`-filen.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $short_circuit | `bool` | |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/installers/class-core-installer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/installers/class-core-installer.php#L148) på rad 148
