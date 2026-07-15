---
id: wu_sso_enabled
title: ማጣሪያ - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

በተለያዩ ዶሜንዎች ላይ የሚሰራ የጋራ መግቢያ (single-sign-on) አቅምን ለማብቃት ወይም ለማጥፋት ያገለግላል።

ይህንን ዋጋ በማጣራት (filter) የጋራ መግቢያን ሙሉ በሙሉ ለማጥፋት፣ ወይም በየ ሁኔታው እንዲሰራ ለማድረግ መወሰን ይችላሉ።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | የጋራ መግቢያ (SSO) መብራት መሆን አለመሆኑን? ለበቃ (on) ከሆነ `True`፣ የማይፈለግ ከሆነ ደግሞ `false`። |

### Since {#since}

- 2.0.11
### Source {#source}

በ[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) ፋይል ላይ በ110ኛው መስመር ተገልጿል።

## Returns {#returns}
የጋራ መግቢያ (SSO) መብራት መሆን አለመሆኑን ይመልሳል።
