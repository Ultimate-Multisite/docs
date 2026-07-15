---
id: wu_domain_became_primary
title: Hereket - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Hereket: wu_domain_became_primary

Domen bir saýt üçin esasy domen bolanda işledilýär.

Bu hereket domeniň primary_domain baýdagy true edilende, täze esasy domen döredilende ýa-da bar bolan domen esasy bolmak üçin täzelenende işledilýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Beýany |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Esasy bolan domen. |
| $blog_id | `int` | Täsir edilen saýtyň blog ID-si. |
| $was_new | `bool` | Munuň täze döredilen domen bolup-bolmandygy. |

### Wersiýadan bäri {#since}

- 2.0.0
### Çeşme {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) faýlynda 560-njy setirde kesgitlenen.
