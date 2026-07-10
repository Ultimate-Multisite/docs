---
id: wu_mt_provider_log
title: การดำเนินการ - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log {#action-wumtproviderlog}

จะทำงานเมื่อ Provider บันทึกข้อความ (logs a message)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ข้อความที่บันทึก (Log message). |
| $level | `string` | ระดับการบันทึก (Log level). |
| $context | `array` | บริบทเพิ่มเติม (Additional context). |

### Since {#since}

- 1.0.0
### Source {#source}

ถูกกำหนดไว้ใน [`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) บรรทัดที่ 400
