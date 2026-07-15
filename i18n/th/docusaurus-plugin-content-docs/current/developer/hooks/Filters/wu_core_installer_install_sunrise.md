---
id: wu_core_installer_install_sunrise
title: ตัวกรอง - wu_core_installer_install_sunrise
sidebar_label: wu_core_installer_install_sunrise
_i18n_hash: 9750f0fbfe9f02249e4e1d17e585bdb6
---
# Filter: wu_core_installer_install_sunrise

อนุญาตให้ผู้ให้บริการโฮสต์สามารถติดตั้งค่า constant ได้แตกต่างออกไป

การส่งค่า `true` กลับไปจะป้องกันไม่ให้ Ultimate Multisite พยายามเขียนไฟล์ `wp-config`

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $short_circuit | `bool` | |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/installers/class-core-installer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/installers/class-core-installer.php#L148) บรรทัดที่ 148
