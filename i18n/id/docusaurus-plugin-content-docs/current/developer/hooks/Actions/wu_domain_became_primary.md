---
id: wu_domain_became_primary
title: Aksi - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Terpicu saat sebuah domain menjadi domain utama (primary domain) untuk sebuah situs.

Aksi ini dipicu ketika flag `primary_domain` dari sebuah domain diatur ke `true`, baik saat membuat domain utama yang baru maupun saat memperbarui domain yang sudah ada agar menjadi utama.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domain yang menjadi utama. |
| $blog_id | `int` | ID blog dari situs yang terpengaruh. |
| $was_new | `bool` | Apakah ini domain yang baru dibuat. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) pada baris 560
