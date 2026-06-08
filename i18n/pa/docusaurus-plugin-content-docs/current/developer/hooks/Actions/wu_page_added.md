---
id: wu_page_added
title: ਕਾਰਵਾਈ - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

ਇਹ 플러ਗਇਨ ਡਿਵੈਲਪਰਾਂ ਨੂੰ ਪੇਜ ਰਜਿਸਟਰ ਹੋਣ 'ਤੇ ਹੋਰ ਕੰਮ ਕਰਵਾਉਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

`wu_page_load` ਵਾਂਗ ਨਹੀਂ, ਜੋ ਸਿਰਫ਼ ਉਦੋਂ ਚੱਲਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਖਾਸ ਪੇਜ ਦੇਖਿਆ ਜਾ ਰਿਹਾ ਹੁੰਦਾ ਹੈ, ਇਹ hook Ultimate Multisite ਕੋਡ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਜੋ ਵੀ ਐਡਮਿਨ ਪੇਜ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ, ਉਸ ਲਈ ਰਜਿਸਟ੍ਰੇਸ਼ਨ 'ਤੇ ਚੱਲਦਾ ਹੈ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ਇਸ ਪੇਜ ਦੀ ID। |
| $page_hook | `string` | ਇਸ ਪੇਜ ਦਾ hook ਨਾਮ। |

### Since

- 2.0.0
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
