---
id: wu_page_added
title: ક્રિયા - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

પ્લગઇન ડેવલપર્સને પેજીસ રજીસ્ટર થાય ત્યારે વધારાની વસ્તુઓ ચલાવવાની મંજૂરી આપે છે.

`wu_page_load` થી અલગ, જે ફક્ત ત્યારે ચાલે છે જ્યારે કોઈ ચોક્કસ પેજ દેખાઈ રહ્યું હોય, આ હૂક Ultimate Multisite કોડનો ઉપયોગ કરીને ઉમેરવામાં આવતા દરેક એડમિન પેજ માટે રજીસ્ટ્રેશન સમયે ચાલે છે.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | આ પેજની ID. |
| $page_hook | `string` | આ પેજનું હૂક નામ. |

### Since

- 2.0.0
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
