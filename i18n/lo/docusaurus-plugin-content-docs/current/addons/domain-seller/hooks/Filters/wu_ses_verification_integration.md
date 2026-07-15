---
id: wu_ses_verification_integration
title: ຕົວກັ່ນຕອງ - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# ຕົວກອງ: wu_ses_verification_integration

ຕົວກອງ: ອະນຸຍາດໃຫ້ code ອື່ນສະໜອງອອບເຈັກການເຊື່ອມຕໍ່ SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $integration | `object\|null` | ອອບເຈັກການເຊື່ອມຕໍ່ SES, ຫຼື null. |

### ຕັ້ງແຕ່ {#since}

- 2.2.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ທີ່ແຖວ 731
