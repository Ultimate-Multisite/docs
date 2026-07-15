---
id: wu_checkout_form_base_domains
title: Saringan - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Saringan: wu_checkout_form_base_domains

Nyaring domain dhasar formulir checkout bareng sing ora kena dadi cathetan domain kapetakake.

Gunakake saringan iki nalika integrasi nyedhiyakake domain dhasar tambahan kanggo kolom **URL situs** formulir checkout. Domain sing dibalekake dening saringan iki dianggep minangka host registrasi bareng tinimbang domain khusus saben situs.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $domains | `array` | Domain dhasar bareng sing diklumpukake saka konfigurasi formulir checkout. |

### Wiwit {#since}

- 2.13.0

### Sumber {#source}

Ditetepake ing `inc/functions/domain.php`.


## Balikan {#returns}

Array domain dhasar formulir checkout sing wis dinormalisasi.
