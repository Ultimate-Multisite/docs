---
id: wu_mt_provider_log
title: చర్య - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log

ఒక ప్రొవైడర్ (provider) సందేశాన్ని లాగ్ చేసినప్పుడు ఇది ట్రిగ్గర్ అవుతుంది.

## పారామీటర్లు (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | లాగ్ సందేశం. |
| $level | `string` | లాగ్ స్థాయి (Log level). |
| $context | `array` | అదనపు సందర్భం (Additional context). |

### నుండి (Since) {#since}

- 1.0.0
### మూలం (Source) {#source}

[`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) లోని 400వ లైన్‌లో నిర్వచించబడింది.
