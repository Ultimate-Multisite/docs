---
id: wu_domain_became_primary
title: Veiksmas - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Veiksmas: wu_domain_became_primary

Suveikia, kai domenas tampa pagrindiniu domeno svetainei.

Šis veiksmas suaktyvinamas, kai domeno `primary_domain` žyma nustatoma į true, arba kuriant naują pagrindinį domeną, arba atnaujinant esamą domeną, kad jis taptų pagrindinis.

## Parametrai

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domenas, kuris tapo pagrindinis. |
| $blog_id | `int` | Paveiktos svetainės blogo ID. |
| $was_new | `bool` | Ar tai naujai sukurtas domenas. |

### Nuo

- 2.0.0
### Šaltinis

Apibrėžta [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) 560 eilutėje
