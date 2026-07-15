---
id: wu_return_url
title: ማጣሪያ - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

ገንቢዎች የቼክአውት ሂደት ከተጠናቀቀ በኋላ ጥቅም ላይ የሚውለውን የገበያ መግቢያ (gateway) የመመለስ አድራሻ (return URL) እንዲቀይሩ ያስችላል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | ከሂደቱ በኋላ የሚመራበት (redirect) አድራሻ። |
| $gateway | `self` | የገበያ መግቢያው (gateway) ተልዕኮ። |
| $payment | `\WP_Ultimo\Models\Payment` | የUltimate Multisite የክፍያ ተልዕኮ። |
| $cart | `\WP_Ultimo\Checkout\Cart` | የአሁኑ Ultimate Multisite የካርት ትዕዛዝ። |

### Since {#since}

- 2.0.20
### Source {#source}

በ[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) በ683ኛው መስመር ተገልጿል።

## Returns {#returns}
