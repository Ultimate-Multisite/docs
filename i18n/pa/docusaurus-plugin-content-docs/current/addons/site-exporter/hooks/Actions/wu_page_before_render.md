---
id: wu_page_before_render
title: ਕਾਰਵਾਈ - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: fc447057ea50e758d4cf83bef375f7e6
---
# Action: wu_page_before_render {#action-wupagebeforerender}

ਇਹ ਕੋਡ ਪੇਜ ਨੂੰ ਰੈਂਡਰ (render) ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਚੱਲਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰ (Parameters) {#parameters}

| ਨਾਮ (Name) | ਕਿਸਮ (Type) | ਵਰਣਨ (Description) |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ਪੇਜ ਦੀ ID। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ਦਾ instance। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 1.8.2
### ਸਰੋਤ (Source) {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L356) ਵਿੱਚ ਲਾਈਨ 356 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ।
