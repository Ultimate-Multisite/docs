---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Menentukan sama ada pemetaan perlu digunakan

Biasanya, anda hanya mahu membenarkan pemetaan yang aktif digunakan. Walau bagaimanapun, jika anda ingin menggunakan logik yang lebih canggih, atau membenarkan domain yang tidak aktif dipetakan juga, anda hanya perlu melakukan filter di sini.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Patutkah pemetaan ini dianggap aktif? |
| $mapping | `\Domain` | Pemetaan yang sedang kita periksa |
| $domain | `string` | |

### Source

Didefinisikan dalam [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) pada baris 391
