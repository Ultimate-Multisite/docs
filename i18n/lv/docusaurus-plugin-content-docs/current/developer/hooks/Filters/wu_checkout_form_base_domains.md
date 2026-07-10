---
id: wu_checkout_form_base_domains
title: Filtrs - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtrs: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtrē koplietotos norēķināšanās veidlapas bāzes domēnus, kuriem nevajadzētu kļūt par kartēto domēnu ierakstiem.

Izmantojiet šo filtru, kad integrācija nodrošina papildu bāzes domēnus norēķināšanās veidlapas **vietnes URL** laukiem. Domēni, ko atgriež šis filtrs, tiek apstrādāti kā koplietoti reģistrācijas resursdatori, nevis katrai vietnei atsevišķi pielāgoti domēni.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $domains | `array` | Koplietotie bāzes domēni, kas apkopoti no norēķināšanās veidlapas konfigurācijas. |

### Kopš {#since}

- 2.13.0

### Avots {#source}

Definēts `inc/functions/domain.php`.


## Atgriež {#returns}

Normalizētu norēķināšanās veidlapas bāzes domēnu masīvu.
