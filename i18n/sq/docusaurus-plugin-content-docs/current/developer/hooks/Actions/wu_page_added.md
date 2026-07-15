---
id: wu_page_added
title: Veprim - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Veprimi: wu_page_added

Lejoni zhvilluesit e plugin-eve të ekzekutojnë gjëra shtesë kur faqet regjistrohen.

Ndryshe nga wu_page_load, i cili ekzekutohet vetëm kur po shihet një faqe specifike, ky hook ekzekutohet gjatë regjistrimit për çdo faqe administrimi që shtohet duke përdorur kodin e Ultimate Multisite.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $page_id | `string` | ID-ja e kësaj faqeje. |
| $page_hook | `string` | Emri i hook-ut të kësaj faqeje. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) në rreshtin 228
