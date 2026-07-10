---
id: wu_ses_verification_integration
title: Àlẹmọ - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Àlẹmọ: wu_ses_verification_integration {#filter-wusesverificationintegration}

Àlẹmọ: gba kóòdù míràn láàyè láti pèsè object ìṣepọ̀ SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Àwọn Párámítà {#parameters}

| Orúkọ | Irú | Àpèjúwe |
|------|------|-------------|
| $integration | `object\|null` | Object ìṣepọ̀ SES náà, tàbí null. |

### Láti {#since}

- 2.2.0
### Orísun {#source}

Ti ṣàlàyé nínú [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ní ìlà 731
