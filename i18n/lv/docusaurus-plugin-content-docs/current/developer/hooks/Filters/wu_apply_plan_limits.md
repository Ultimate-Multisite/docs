---
id: wu_apply_plan_limits
title: Filtrs - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filtrs: wu_apply_plan_limits

Ļauj plugin izstrādātājiem apiet ierobežojumus.

Šo filtru var izmantot, lai palaistu patvaļīgu kodu pirms tiek inicializēti jebkādi ierobežojumi. Ja jūsu filtrs atgriež jebkādu patiesu vērtību, process turpināsies; ja tas atgriež jebkādu nepatiesu vērtību, kods atgriezīsies un neviens no tālāk norādītajiem hook netiks palaists.

### Kopš {#since}

- 1.7.0
### Avots {#source}

- Definēts [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) 52. rindā
- Definēts [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) 98. rindā
## Atgriež {#returns}
