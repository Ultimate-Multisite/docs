---
id: wu_contains_element
title: Filtar - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filtar: wu_contains_element

Omogućuje developerima promjenu rezultata početnog pretraživanja.

Ovo je korisno za third-party buildere i slično.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $contains_elements | `bool` | Je li element sadržan u sadržaju. |
| $content | `string` | Sadržaj koji se ispituje. |
| $element | `self` | Trenutačni element. |
| $post | `null\|\WP_Post` | Objava za provjeru. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) u retku 534
