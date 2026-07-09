---
id: wu_sso_url
title: Шүүлтүүр - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Шүүлтүүр: wu_sso_url {#filter-wussourl}

Домэйн хоорондын хэрэглэгчийн үйлдлүүдэд буцаагдахаас өмнө үүсгэсэн SSO URL-уудыг шүүнэ.

Интеграц нь sovereign-tenant SSO холбоост итгэмжлэгдсэн контекст нэмэх эсвэл Ultimate Multisite-ийн token баталгаажуулалтыг хадгалан broker URL-ыг солих шаардлагатай үед энэ шүүлтүүрийг ашиглана уу.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $sso_url | `string` | Үүсгэсэн SSO URL. |
| $user | `WP_User` | SSO зочлолтоор баталгаажуулагдах хэрэглэгч. |
| $site_id | `int` | Зочлолтын зорилтот сайтын ID. |
| $redirect_to | `string` | SSO баталгаажуулалт амжилттай болсны дараах очих URL. |

### Хувилбараас {#since}

- 2.13.0

### Эх сурвалж {#source}

`inc/sso/class-sso.php` дотор тодорхойлогдсон.


## Буцаах утга {#returns}

Шүүгдсэн SSO URL.
