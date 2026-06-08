---
id: wu_sso_enabled
title: வடிகட்டி - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

வேறு டொமைன்களில் ஒரே நேரத்தில் உள்நுழைவதற்கான (cross-domain single-sign-on) வசதியை இயக்கவும் அல்லது அணைக்கவும் இது உதவுகிறது.

இந்த மதிப்பை மாற்றியமைப்பதன் மூலம், ஒரே நேரத்தில் உள்நுழைவதை (single-sign-on) முழுமையாக அணைக்கலாம் அல்லது குறிப்பிட்ட நிபந்தனைகளின் அடிப்படையில் மட்டும் அதை இயக்கலாம்.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO இயக்கப்பட வேண்டுமா? இயக்க (on) என்றால் `True`, அணைக்க (off) என்றால் `false` கொடுக்கவும். |

### Since

- 2.0.11
### Source

Defined in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) at line 110


## Returns
SSO இயக்கப்பட்டுள்ளதா அல்லது இயக்கப்படவில்லை என்ற தகவலை இது வழங்கும்.
