---
id: wu_domain_ses_verified
title: Action - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified {#action-wudomainsesverified}

این عمل زمانی اجرا می‌شود که SES تأیید کند که یک دامنه با DKIM تأیید شده است.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | شیء دامنه. |

### از نسخه {#since}

- 2.2.0
### منبع {#source}

در [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) در خط ۴۸۰ تعریف شده است.
