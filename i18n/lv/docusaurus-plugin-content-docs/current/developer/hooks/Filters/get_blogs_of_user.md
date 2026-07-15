---
id: get_blogs_of_user
title: Filtrs - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtrs: get_blogs_of_user

Šeit drošības labad atkārto oriģinālo WP filtru.

Filtrē sarakstu ar vietnēm, kurām lietotājs pieder.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $sites | `object[]` | Lietotājam piederošu vietņu objektu masīvs. |
| $user_id | `int` | Lietotāja ID. |
| $all | `bool` | Vai atgrieztajā vietņu masīvā jāiekļauj visas vietnes, tostarp tās, kas atzīmētas kā 'deleted', 'archived' vai 'spam'. Noklusējums false. |

### Kopš {#since}

- 2.0.11
### Avots {#source}

Definēts [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) 851. rindā
