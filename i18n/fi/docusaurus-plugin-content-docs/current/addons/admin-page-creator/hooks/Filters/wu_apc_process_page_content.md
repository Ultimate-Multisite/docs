---
id: wu_apc_process_page_content
title: Suodatin - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Suodatin: wu_apc_process_page_content

Salli kehittäjien muokata lopullista sisältöä

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $content | `string` | Sisältö korvausten jälkeen. |
| $content_before_processing | `string` | Sisältö ennen korvauksia. |
| $to_replace | `array` | Taulukko, joka sisältää placeholderit. |
| $placeholder_count | `int` | Löydettyjen placeholderien määrä. |

### Alkaen

- 1.4.0
### Lähde

Määritelty tiedostossa [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) rivillä 46


## Palauttaa
Sisältö muokkauksen jälkeen.
