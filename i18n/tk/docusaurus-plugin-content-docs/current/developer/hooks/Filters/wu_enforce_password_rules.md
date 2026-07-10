---
id: wu_enforce_password_rules
title: Süzgüç - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Süzgüç: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Goşmaça parol düzgünleriniň mejbury ulanyljakdygyny süzgüçden geçirýär.

True bolanda, iň pes uzynlyk we nyşan talaplaryny mejbury ulanýar. "Super Strong" sazlamasy üçin ýa-da Defender Pro-nyň Strong Password aýratynlygy işjeň bolanda awtomatik açylýar.

## Parametrler {#parameters}

| Ady | Görnüşi | Beýany |
|------|------|-------------|
| $enforce_rules | `bool` | Goşmaça düzgünleri mejbury ulanmalydygyny görkezýär. |
| $strength_setting | `string` | Admin sazlamasynyň bahasy. |
| $defender_active | `bool` | Defender Pro Strong Password-yň işjeňdigini görkezýär. |

### Şu wersiýadan bäri {#since}

- 2.4.0
### Çeşme {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) içinde 531-nji setirde kesgitlenen.
