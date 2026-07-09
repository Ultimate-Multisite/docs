---
id: wu_checkout_form_base_domains
title: Filtru - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtru: wu_checkout_form_base_domains

Filtrează domeniile de bază partajate ale formularului de checkout care nu ar trebui să devină înregistrări de domenii mapate.

Folosește acest filtru când o integrare furnizează domenii de bază suplimentare pentru câmpurile **Site URL** ale formularului de checkout. Domeniile returnate de acest filtru sunt tratate ca gazde de înregistrare partajate în loc de domenii personalizate per site.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $domains | `array` | Domenii de bază partajate colectate din configurația formularului de checkout. |

### Începând cu

- 2.13.0

### Sursă

Definit în `inc/functions/domain.php`.


## Returnează

Array de domenii de bază normalizate ale formularului de checkout.
