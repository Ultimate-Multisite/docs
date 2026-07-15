---
id: wu_page_added
title: ਕ੍ਰਿਆ - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

ਪਲੱਗਇਨ ਡਿਵੈਲਪਰਾਂ ਨੂੰ ਪੇਜ ਰਜਿਸਟਰ ਹੋਣ 'ਤੇ ਵਾਧੂ ਕੰਮ ਚਲਾਉਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

wu_page_load ਤੋਂ ਵੱਖਰਾ, ਜੋ ਸਿਰਫ਼ ਉਦੋਂ ਚੱਲਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਖਾਸ ਪੇਜ ਦੇਖਿਆ ਜਾ ਰਿਹਾ ਹੁੰਦਾ ਹੈ, ਇਹ hook WP Ultimo ਕੋਡ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਜੋ ਵੀ ਐਡਮਿਨ ਪੇਜ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ, ਉਸਦੇ ਰਜਿਸਟ੍ਰੇਸ਼ਨ 'ਤੇ ਚੱਲਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ਇਸ ਪੇਜ ਦੀ ID। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ਇਸ ਪੇਜ ਲਈ ਬਣਾਇਆ ਗਿਆ hook। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ਵਿੱਚ ਲਾਈਨ 203 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
