---
id: wu_get_migration_steps
title: ตัวกรอง - wu_get_migration_steps
sidebar_label: wu_get_migration_steps
_i18n_hash: 72fb487202b062d0fceec5058b555b19
---
# Filter: wu_get_migration_steps

อนุญาตให้นักพัฒนาและส่วนเสริม (add-ons) สามารถเพิ่มขั้นตอนการย้ายข้อมูล (migration steps) ใหม่ได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $steps | `array` | รายการขั้นตอนการย้ายข้อมูล |
| $migrator | `\WP_Ultimo\Installers\Migrator` | อ็อบเจกต์ของคลาส Migrator |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/installers/class-migrator.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/installers/class-migrator.php#L399) บรรทัดที่ 399
