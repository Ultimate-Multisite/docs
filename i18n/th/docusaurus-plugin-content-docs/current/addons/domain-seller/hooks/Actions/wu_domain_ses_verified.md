---
id: wu_domain_ses_verified
title: การดำเนินการ - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified

จะทำงานเมื่อ SES ยืนยันว่าโดเมนนั้นผ่านการตรวจสอบ DKIM แล้ว

## พารามิเตอร์ {#parameters}

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | อ็อบเจกต์โดเมน |

### ตั้งแต่ {#since}

- 2.2.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) บรรทัดที่ 480
