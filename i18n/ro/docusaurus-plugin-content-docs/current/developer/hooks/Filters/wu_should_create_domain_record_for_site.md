---
id: wu_should_create_domain_record_for_site
title: Filtru - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtru: wu_should_create_domain_record_for_site

Filtrează dacă Ultimate Multisite ar trebui să creeze o înregistrare de domeniu pentru un site nou creat.

Folosiți acest filtru pentru a suprima sau amâna crearea automată a înregistrării de domeniu pentru site-uri care folosesc un domeniu de bază partajat pentru formularul de checkout, o gazdă internă sau un domeniu pe care o altă integrare îl va gestiona separat.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $create | `bool` | Dacă înregistrarea de domeniu ar trebui creată. |
| $site | `WP_Site` | Obiectul site-ului nou creat. |

### Începând cu

- 2.13.0

### Sursă

Definit în `inc/functions/domain.php`.


## Returnează

Boolean care indică dacă să fie creată înregistrarea de domeniu.
