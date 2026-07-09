---
title: Hestia Kontrol Paneli Integratsiyasi
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integratsiyasi {#hestia-control-panel-integration}

Bu qo'llanma Ultimate Multisite Hestia integratsiyasini qanday sozlashni tushuntiradi, shunda sizning tarmoqdagi xaritalangan domenlar avtomatik ravishda Hestia'da Veb Domen Aliqlari sifatida qo'shiladi (va olib tashlanadi).

- Hestia CLI ma'lumotlari: v-add-web-domain-alias / v-delete-web-domain-alias
- Rasmiy REST API hujjatlari: https://hestiacp.com/docs/server-administration/rest-api.html

## Nima Qiladi {#what-it-does}
- Ultimate Multisite'da domen xaritalanganda, integratsiya Hestia API chaqirib quyidagi buyruqlarni bajaradi:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domen xaritalanishi olib tashlanganda, u quyidagini bajaradi:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domen Xaritalash sozlamalaridagi "Auto-create www subdomain" (www sousdomainini avtomatik yaratish) sozlamangizga qarab, `www.` aliasini tanlab qo'yish/olib tashlash mumkin.

## Oldingi Talablar {#prerequisites}
- WordPress o'rnatishingizga allaqachon ishora qilayotgan mavjud Hestia Veb Domeni bo'lishi kerak. Integratsiya bu asosiy domenga aliaslarni bog'laydi.
- Hestia API kirishini faollashtirish kerak. Siz parolni yoki API hash/tokenidan foydalanib autentifikatsiya qilishingiz mumkin.

API kirishini va autentifikatsiya tafsilotlarini faollashtirish uchun Hestianing REST API hujjatlariga qarang:
https://hestiacp.com/docs/server-administration/rest-api.html

## Sozlash (Wizard → Integratsiyalar → Hestia) {#configuration-wizard--integrations--hestia}
Quyidagi qiymatlarni bering:

`WU_HESTIA_API_URL` (shart)
  - Bu API'ning asosiy nuqtai nazari, odatda `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (shart)
  - API buyruqlari uchun Hestia foydalanuvchisi (ko'pincha `admin`).

`WU_HESTIA_API_PASSWORD` yoki `WU_HESTIA_API_HASH` (kamida biri)
  - autentifikatsiya usulidan birini tanlang: parol yoki API hash/token.

`WU_HESTIA_ACCOUNT` (shart)
  - Hestia'dagi Veb Domenning hisobi (egasi); bu CLI uchun birinchi argumentdir.

`WU_HESTIA_WEB_DOMAIN` (shart)
  - WordPressni xizmat qilayotgan mavjud Hestia Veb Domeni (aliaslar shu yerga qo'shiladi).

`WU_HESTIA_RESTART` (ixtiyoriy; default `yes`)
  - Aliaslar o'zgargandan so'ng xizmatlarni qayta ishga tushirish/qayta yuklash kerakmi.

Siz bu konstantlarni `wp-config.php` fayliga kiritishingiz mumkin yoki ularni qo'lda belgilashingiz mumkin.

## Sozlamani tekshirish {#verifying-setup}
- Wizardning "Testing" (Sinov) bosqichida, plugin API orqali `v-list-web-domains <WU_HESTIA_ACCOUNT> json` buyrug'ini chaqiradi. Muammosiz javob ulanish va autentifikatsiyani tasdiqlaydi.
- Domenni xaritadan (mapping) keyin, Hestia'da tekshiring: Web > asosiy domen > Aliases (Aliaslar). Yangi alias qo'shilganini ko'rishingiz kerak.

## Eslatmalar va maslahatlar {#notes--tips}
- `WU_HESTIA_WEB_DOMAIN` allaqachon mavjudligini va `WU_HESTIA_ACCOUNT` tomonidan egaligida ekanligini ta'minlang.
- Agar SSL talab qilsa, sertifikatlarni Hestia orqali boshqarish kerak. Bu integratsiya hozircha faqat aliaslar bilan ishlaydi.
- Domen xaritasi "www subdomain" sozlamangizga qarab plugin `www.<domain>` ni qo'shishi yoki olib tashlashi mumkin.

## API chaqiruvi misoli (cURL) {#example-api-call-curl}
Quyida tushunchaviy misol keltirilgan (o'zingizning muhitingizga moslang). aniq parametrlarni rasmiy hujjatdan tekshiring.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (yoki &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (qo'shish uchun alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

O'chirish uchun `cmd=v-delete-web-domain-alias` va xuddi shu argumentlardan foydalaning.

## Muammolarni hal qilish (Troubleshooting) {#troubleshooting}
- API dan HTTP xatosi: `WU_HESTIA_API_URL` ning `/api` bilan tugaganligini va u yetib borayotganligini tekshiring.
- Auth xatolari: `WU_HESTIA_API_USER` ni va ya `WU_HESTIA_API_PASSWORD` yoki `WU_HESTIA_API_HASH` dan birini tasdiqlang.
- Loglarda "Missing account/base domain" (hisob/asosiy domen yo'q) xabari: Hestia da `WU_HESTIA_ACCOUNT` va `WU_HESTIA_WEB_DOMAIN` sozlanishi va amal qilayotganligini ta'minlang.

## Manbalar {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Haqida Ma'lumotlar (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
