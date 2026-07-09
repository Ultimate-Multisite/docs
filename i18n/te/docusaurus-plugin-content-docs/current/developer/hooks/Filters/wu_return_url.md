---
id: wu_return_url
title: ఫిల్టర్ - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

చెక్అవుట్ ప్రక్రియలు పూర్తయిన తర్వాత ఉపయోగించే గేట్‌వే రిటర్న్ URLని మార్చడానికి డెవలపర్‌లకు ఇది అనుమతిస్తుంది.

## Parameters {#parameters}

| Name | Type | వివరణ |
|------|------|-------------|
| $return_url | `string` | ప్రక్రియ తర్వాత మళ్లించాల్సిన (redirect) URL. |
| $gateway | `self` | గేట్‌వే యొక్క ఉదాహరణ (instance). |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite చెల్లింపు ఉదాహరణ (payment instance). |
| $cart | `\WP_Ultimo\Checkout\Cart` | ప్రస్తుత Ultimate Multisite కార్ట్ ఆర్డర్. |

### Since {#since}

- 2.0.20
### Source {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) లోని 683వ లైన్‌లో నిర్వచించబడింది.

## Returns {#returns}
