---
id: wu_page_added
title: Aksi - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Aksi: wu_page_added {#action-wupageadded}

Ngidinan pamekar plugin pikeun ngajalankeun hal tambahan nalika kaca didaptarkeun.

Béda jeung wu_page_load, anu ngan jalan nalika kaca husus keur ditempo, hook ieu jalan dina mangsa pendaptaran pikeun unggal kaca admin anu ditambahkeun maké kode Ultimate Multisite.

## Parameter {#parameters}

| Ngaran | Tipe | Panjelasan |
|------|------|-------------|
| $page_id | `string` | ID tina kaca ieu. |
| $page_hook | `string` | Ngaran hook tina kaca ieu. |

### Ti saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) dina baris 228
