---
id: wu_page_load
title: عمل - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# کړنه: wu_page_load {#action-wupageload}

د plugin جوړوونکو ته اجازه ورکوي چې زموږ پاڼو ته اضافي hooks ورزیات کړي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $id | `string` | د دې پاڼې ID. |
| $page_hook | `string` | د دې پاڼې د پاڼې hook. |
| $admin_page | `self` | د پاڼې نمونه. |

### له نسخې راهیسې {#since}

- 1.8.2
- 2.0.4: درېیم پارامتر ورزیات شو: د پاڼې نمونه.
### سرچینه {#source}

په [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) کې په 318 کرښه کې تعریف شوی.
