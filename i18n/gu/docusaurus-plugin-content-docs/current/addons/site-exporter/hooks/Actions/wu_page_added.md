---
id: wu_page_added
title: ક્રિયા - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

પ્લગઇન ડેવલપર્સને પેજીસ રજીસ્ટર થાય ત્યારે વધારાની વસ્તુઓ ચલાવવાની મંજૂરી આપે છે.

`wu_page_load` થી અલગ, જે ફક્ત ત્યારે ચાલે છે જ્યારે કોઈ ચોક્કસ પેજ દેખાઈ રહ્યું હોય, આ હૂક (hook) WP Ultimo કોડનો ઉપયોગ કરીને ઉમેરવામાં આવતા દરેક એડમિન પેજ માટે રજીસ્ટ્રેશન સમયે ચાલે છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | આ પેજની ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | આ પેજ માટે જનરેટ થયેલો હૂક. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) માં લાઇન 203 પર વ્યાખ્યાયિત છે
