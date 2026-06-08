---
id: wu_page_added
title: செயல்பாடு - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

பக்கங்கள் பதிவு செய்யப்படும்போது (registered) கூடுதல் செயல்பாடுகளை இயக்க, 플러ഗിൻ டெவலப்பர்களுக்கு இது உதவுகிறது.

`wu_page_load` என்ற hook-க்கு contrário, இது ஒரு குறிப்பிட்ட பக்கம் பார்க்கப்படும்போது மட்டும் இயங்குவதில்லை. மாறாக, Ultimate Multisite கோடைப் பயன்படுத்தி சேர்க்கப்படும் ஒவ்வொரு admin பக்கத்தின் பதிவு செய்யும்போதும் (registration) இந்த hook இயங்கும்.

## Parameters

| Name | Type | விளக்கம் |
|------|------|-------------|
| $page_id | `string` | இந்த பக்கத்தின் ID. |
| $page_hook | `string` | இந்த பக்கத்தின் hook பெயர். |

### Since

- 2.0.0
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
