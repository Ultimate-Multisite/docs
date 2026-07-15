---
id: wu_dashboard_this-tab_widgets
title: 'ድርጊት - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets

ፕልጊን ገንቢዎች (plugin developers) በኔትወርክ ዳሽቦርድ ፓነል ላይ 위젯 እንዲጨምሩ የሚያስችል hook ነው።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $tab | `string` | አሁን ያለው ታብ (tab)። |
| $screen | `\WP_Screen` | የስክሪን ኦብጀክት (screen object)። |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | የUltimate Multisite የአስተዳደር ገጽ (admin page) ምሳሌ። |

### Since {#since}

- 2.0.0
### Source {#source}

በ[`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) ውስጥ በ214ኛው መስመር ተገልጿል።
