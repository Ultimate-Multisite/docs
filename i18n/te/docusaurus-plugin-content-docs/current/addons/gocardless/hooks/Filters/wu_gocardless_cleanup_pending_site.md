---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

GoCardless సభ్యత్వం రద్దు చేయబడినప్పుడు, అనాథగా మిగిలిపోయిన (orphaned) పెండింగ్ సైట్‌ను తొలగించడానికి ముందు ఇది పనిచేస్తుంది.

ఈ ఫిల్టర్‌ నుండి `false`ని తిరిగి ఇస్తే, తొలగింపును నివారించవచ్చు.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | పెండింగ్ సైట్ యొక్క WordPress బ్లాగ్ ID. |
| $membership | `\WP_Ultimo\Models\Membership` | రద్దు చేయబడిన సభ్యత్వం. |
| $old_status | `string` | రద్దు చేయడానికి ముందు ఉన్న స్టేటస్. |

### Since

- 2.0.0
### Source

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) లోని 1086వ లైన్‌లో నిర్వచించబడింది.
