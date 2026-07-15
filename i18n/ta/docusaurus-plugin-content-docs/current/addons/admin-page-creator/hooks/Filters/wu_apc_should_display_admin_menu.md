---
id: wu_apc_should_display_admin_menu
title: Filter - wu_apc_should_display_admin_menu
sidebar_label: wu_apc_should_display_admin_menu
_i18n_hash: f572495daf004aaa34faee72e426e05f
---
# Filter: wu_apc_should_display_admin_menu

நிர்வாகிகள் (Admins) தனிப்பயனாக்குதல் செயல்முறையை முடித்திருந்தால், நிர்வாக மெனு பக்கங்களை மறைக்க இந்த ஃபில்டரைப் பயன்படுத்தலாம்.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $should_display_admin_menu | `bool` | பக்கங்களை நாம் காட்ட வேண்டுமானால் (True) அல்லது காட்டத் தேவையில்லை என்றால் (False) இதை அமைக்கவும். |
| $network_active | `bool` | இந்த plugin நெட்வொர்க் நிர்வாகிக்கு (network admin) செயலில் உள்ளதா எனச் சரிபார்க்கவும். |

### Since {#since}

- 1.4.0
### Source {#source}

Defined in [`inc/class-wu-admin-pages.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/class-wu-admin-pages.php#L645) at line 645
