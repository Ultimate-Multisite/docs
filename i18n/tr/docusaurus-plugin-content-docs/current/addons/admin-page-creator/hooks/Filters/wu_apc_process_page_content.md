---
id: wu_apc_process_page_content
title: Filtre - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filtre: wu_apc_process_page_content

Geliştiricilerin son içeriği düzenlemesine olanak tanır.

## Parametreler {#parameters}

| İsim | Tip | Açıklama |
|------|------|-------------|
| $content | `string` | Yer değiştirmelerden sonraki içerik. |
| $content_before_processing | `string` | Yer değiştirmelerden önceki içerik. |
| $to_replace | `array` | Yer tutucuları içeren dizi. |
| $placeholder_count | `int` | Bulunan yer tutucu sayısı. |

### Since {#since}

- 1.4.0
### Source {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) dosyasında 46. satırda tanımlanmıştır.

## Dönüş Değeri {#returns}
Değişiklikten sonraki içerik.
