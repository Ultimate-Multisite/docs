---
id: wu_page_before_render
title: アクション - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: fc447057ea50e758d4cf83bef375f7e6
---
# アクション: wu_page_before_render {#action-wupagebeforerender}

ページをレンダリングする前に発火します。

## パラメータ {#parameters}

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ページのIDです。 |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Pageインスタンスです。 |

### 導入 {#since}

- 1.8.2

### ソース {#source}

次の場所で定義されています [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L356) 行356で。
