---
id: wu_apc_process_page_content
title: Шүүлтүүр - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Шүүлтүүр: wu_apc_process_page_content

Хөгжүүлэгчдэд эцсийн агуулгыг өөрчлөх боломж олгоно

## Параметрүүд {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | Орлуулалт хийсний дараах агуулга. |
| $content_before_processing | `string` | Орлуулалтаас өмнөх агуулга. |
| $to_replace | `array` | Placeholder-уудыг агуулсан массив. |
| $placeholder_count | `int` | Олдсон placeholder-уудын тоо. |

### Хойш {#since}

- 1.4.0
### Эх сурвалж {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46)-д 46-р мөрөнд тодорхойлогдсон


## Буцаах утга {#returns}
Өөрчилсний дараах агуулга.
