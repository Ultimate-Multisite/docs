---
id: wu_sso_url
title: Filtr - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtr: wu_sso_url {#filter-wussourl}

Domenlararo mijoz amallari uchun qaytarilishidan oldin yaratilgan SSO URL manzillarini filtrlaydi.

Integratsiya suveren tenant SSO havolasiga ishonchli kontekst qo‘shishi yoki Ultimate Multisite'ning token tekshiruvini saqlagan holda broker URL manzilini almashtirishi kerak bo‘lganda ushbu filtrdan foydalaning.

## Parametrlar {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Yaratilgan SSO URL. |
| $user | `WP_User` | SSO tashrifi orqali autentifikatsiya qilinadigan foydalanuvchi. |
| $site_id | `int` | Tashrif uchun maqsadli sayt ID si. |
| $redirect_to | `string` | Muvaffaqiyatli SSO tekshiruvidan keyingi manzil URL. |

### Dan boshlab {#since}

- 2.13.0

### Manba {#source}

`inc/sso/class-sso.php` ichida belgilangan.


## Qaytaradi {#returns}

Filtrlangan SSO URL.
