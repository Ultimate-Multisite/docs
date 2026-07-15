---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

پلگ ان بنانے والے ڈویلپرز کو یہ موقع ملتا ہے کہ جب صفحات رجسٹر کیے جائیں تو وہ اضافی کام کر سکیں۔

`wu_page_load` کے برعکس، جو صرف اس وقت چلتا ہے جب کوئی خاص صفحہ دیکھا جا رہا ہوتا ہے، یہ hook ہر ایڈمن پیج کے رجسٹریشن پر چلتا ہے جسے WP Ultimo کوڈ کا استعمال کرتے ہوئے جوڑا جاتا ہے۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | اس صفحے کی ID۔ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | اس صفحے کے لیے بنایا گیا hook۔ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) میں لائن 203 پر ڈیفائن کیا گیا ہے۔
