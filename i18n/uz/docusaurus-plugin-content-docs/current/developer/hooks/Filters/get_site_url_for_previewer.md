---
id: get_site_url_for_previewer
title: Filtr - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtr: get_site_url_for_previewer

Plugin dasturchilariga previewer’da ishlatiladigan URL’ni filtrlashga ruxsat beradi

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $domain | `string` | Hozir ishlatilayotgan standart domen, o‘zgartirishlar uchun foydali |
| $domain_options | `array` | Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options ichiga kiritilgan barcha domen variantlari ro‘yxati |

### Dan boshlab {#since}

- 1.7.2
### Manba {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) faylida 812-qatorda aniqlangan


## Qaytaradi {#returns}
Ishlatiladigan yangi domen
