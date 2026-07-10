---
id: wu_site_created
title: การดำเนินการ - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created {#action-wusitecreated}

จะทำงานเมื่อมีการสร้างเว็บไซต์ขึ้นมาเป็นครั้งแรก

จะไม่ทำงานหากมีการทำซ้ำ (duplicate) จากเทมเพลต

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | ข้อมูลอ็อบเจกต์ที่จะถูกจัดเก็บ |
| $site | `\Site` | อินสแตนซ์ของอ็อบเจกต์ |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) บรรทัดที่ 1652
