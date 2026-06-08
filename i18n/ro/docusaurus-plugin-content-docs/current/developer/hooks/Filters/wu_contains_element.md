---
id: wu_contains_element
title: Filtru - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element

Permite dezvoltatorilor să modifice rezultatele căutării inițiale.

Acest filtru este util pentru constructorii de terță parte și situații similare.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $contains_elements | `bool` | Dacă elementul este conținut în conținut. |
| $content | `string` | Conținutul care este examinat. |
| $element | `self` | Elementul curent. |
| $post | `null\|\WP_Post` | post-ul pe care trebuie verificat. |

### De la

- 2.0.0
### Sursă

Definit în [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) la linia 534
