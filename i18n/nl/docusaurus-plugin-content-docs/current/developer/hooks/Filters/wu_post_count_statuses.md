---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses {#filter-wupostcountstatuses}

Sta pluginontwikkelaars toe om te wijzigen welke berichtstatus moet worden geteld. Standaard worden gepubliceerde en privéberichten geteld.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | De lijst van berichtstatussen |
| $post_type | `string` | De slug van het berichttype |

### Since {#since}

- 1.9.1

### Source {#source}

Defined in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) at line 119

## Returns {#returns}

Nieuwe array van berichtstatus
