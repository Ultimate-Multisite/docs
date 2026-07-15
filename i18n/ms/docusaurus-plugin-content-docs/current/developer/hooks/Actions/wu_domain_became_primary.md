---
id: wu_domain_became_primary
title: Tindakan - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Tindakan: wu_domain_became_primary

Dijalankan apabila sesebuah domain menjadi domain utama untuk sebuah tapak.

Tindakan ini dipicu apabila bendera `primary_domain` sesebuah domain ditetapkan kepada `true`, sama ada semasa mencipta domain utama baharu atau semasa mengemas kini domain sedia ada untuk menjadikannya utama.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domain yang telah menjadi utama. |
| $blog_id | `int` | ID blog tapak yang terjejas. |
| $was_new | `bool` | Sama ada domain ini baharu dicipta. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan dalam [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) pada baris 560
