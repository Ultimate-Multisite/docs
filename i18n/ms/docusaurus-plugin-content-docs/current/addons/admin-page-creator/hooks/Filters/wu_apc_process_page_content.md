---
id: wu_apc_process_page_content
title: Penapis - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Membenarkan pembangun untuk mengubah kandungan akhir.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $content | `string` | Kandungan selepas penggantian. |
| $content_before_processing | `string` | Kandungan sebelum penggantian. |
| $to_replace | `array` | Array yang mengandungi penanda tempat (placeholders). |
| $placeholder_count | `int` | Bilangan penanda tempat yang ditemui. |

### Sejak {#since}

- 1.4.0
### Sumber {#source}

Didefinisikan dalam [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) pada baris 46

## Mengembalikan {#returns}
Kandungan selepas pengubahsuaian.
