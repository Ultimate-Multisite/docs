---
id: wu_site_created
title: Acțiune - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created

Se declanșează după ce un site este creat pentru prima dată.

Nu se declanșează dacă este duplicat dintr-un template.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $data | `array` | Datele obiectului care vor fi stocate. |
| $site | `\Site` | Instanța obiectului. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) la linia 1652
