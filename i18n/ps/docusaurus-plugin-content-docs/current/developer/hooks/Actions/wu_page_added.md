---
id: wu_page_added
title: کړنه - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# عمل: wu_page_added

plugin جوړوونکو ته اجازه ورکوي چې کله پاڼې ثبتېږي، اضافي کارونه پرمخ یوسي.

د wu_page_load پر خلاف، چې یوازې هغه وخت چلېږي کله چې یوه ځانګړې پاڼه کتل کېږي، دا hook د هرې اداري پاڼې د ثبت پر مهال چلېږي چې د Ultimate Multisite کوډ په کارولو سره ورزیاتېږي.

## پارامترونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $page_id | `string` | د دې پاڼې ID. |
| $page_hook | `string` | د دې پاڼې د hook نوم. |

### له نسخې راهیسې

- 2.0.0
### سرچینه

په [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) کې په ۲۲۸ کرښه تعریف شوی.
