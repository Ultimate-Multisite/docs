---
title: Plaga quruvchi va sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 ning'izga **Plugin Builder & Sandbox System**ni taqdim etadi. Bu tizim sizning tarmohingizdagi WordPress pluginlarini xavfsiz, alohida sandbox muhit orqali yaratish, faollashtirish va boshqarish imkonini beradi — hamma narsa xavfsiz ajratilgan muhitda amalga oshiriladi.

## Umumiy ko'rinish {#overview}

Plugin Builder AI yordamchisiga tabiiy til so'rovlariga javoban maxsus WordPress pluginlarini yozish imkonini beradi. Yaratilgan pluginlar jonli sayt funksionalligiga ta'sir qilmasdan, avval sandbox qatlami ichida tasdiqlanadi, saqlanadi va faollashtiriladi.

Qo'llash misollari:

- Dasturchilar ishtiroki bo'lmagan holda yengil foydali pluginlarni yaratish.
- WordPress hooklari yoki maxsus post turlari talab qiladigan xususiyatlarni prototiplash.
- Batch operatsiyalar uchun qisqa muddatli avtomatlashtirish skriptlarini yaratish.

## AI orqali Plugin yaratish {#generating-a-plugin-via-ai}

Plugin yaratish uchun Gratis AI Agent chat interfeysini oching va nima kerakligini tasvirlang. Masalan:

> "Dashboardga maxsus admin eslatmasi qo'shadigan plugin yarating."

AI quyidagilarni amalga oshiradi:

1. Strukturaviy kod yaratish orqali plugin PHP kodini ishlab chiqaradi.
2. Sintaksis xatolar va xavfsiz bo'lmagan namunalar uchun natijani tekshiradi.
3. Yaratilgan pluginni sandbox storiga saqlaydi.
4. Plugin slugi bilan tasdiqlash va **Sandbox da faollashtirish** tugmasini qaytaradi.

Faollashtirishdan oldin, shu suhbat sarlovida keyingi savollar berish orqali natijani takomillashtirishingiz mumkin.

## Sandboxda Faollashtirish {#sandbox-activation}

Yaratilgan pluginni sandboxda faollashtirish — uni jonli tarmoqda faollashtirishdan farqli holatdir. Sandbox:

- Pluginni ajratilgan WordPress muhitida (wp-env) ishga tushiradi.
- Har qanday PHP xatoliklari, ogohlantirishlar yoki hooklar bilan to'qnashuvlarni qayd etadi.
- Faollashtirish natijasini suhbat interfeysiga hisoblanadi.

Pluginni sandboxda faollashtirish uchun AI chat javobidagi **Activate in Sandbox** tugmasini bosing, yoki quyidagi slash buyrug'idan foydalaning:

```
/activate-plugin <plugin-slug>
```

Status xaberi faoliyat muvaffaqiyatli yakunlanganmi yoki muvaffaqiyatsiz yakunlanganmiini tasdiqlaydi. Agar muvaffaqiyatsiz bo'lsa, xato yozuvi chat saridagi logda ko'rsatiladi.

## Yaratilgan Pluginlarni Boshqarish {#managing-generated-plugins}

Yaratilgan pluginlar **Gratis AI Agent → Plugin Builder → Manage Plugins** orqali ro'yxatdan olinadi. Ushbu ekranlardan siz quyidagilarni qila olasiz:

| Harakat | Tavsifi |
|---|---|
| **Source ko'rish** | To'liq plugin PHP kodini ko'rib chiqing. |
| **Sandboxda qayta faollashtirish** | Sandboxdagi faollashtirish tekshiruvini qayta ishga tushiring. |
| **Tarmoqda o'rnatish** | Pluginni tirik tarmoqqa (manual tasdiqlash talab etadi) joylashtiring. |
| **Yangilash** | AI orqali yangi versiyani taqdim eting va mavjud kodni almashtiring. |
| **O'chirish** | Pluginni sandbox storidan olib tashlang. Avval barcha saytlardan faollashtiriladi. |

:::warning
**Tarmoqda o'rnatish** yaratilgan pluginni sizning tirik WordPress multisite'ingizga joylashtiradi. Davom etishdan oldin plugin kodini ko'rib chiqing. Gratis AI Agent tirik o'rnatishni yakunlashdan oldin tasdiqlash uchun so'rov beradi.
:::

## Yaratilgan Pluginni Tarmoqda O'rnatish {#installing-a-generated-plugin-on-the-network}

Sandboxdagi plugin sizga qoniqganda, uni tirik tarmoqda o'rnatishingiz mumkin:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** ga kiring.
2. Joylashtirmoqchi bo'lgan plugin yonidagi **Install on Network** (Tarmoqda o'rnatish) tugmasini bosing.
3. Dialogni tasdiqlang. Plugin `wp-content/plugins/` papkasiga va tarmoqda faollashtirilgan holda o'rnatiladi.

Alternativ ravishda, chat interfeysidagi slash buyrug'idan foydalanishingiz mumkin:

```
/install-plugin <plugin-slug>
```

## Plugin Yangilanishlari {#plugin-updates}

Yaratilgan pluginni yangilash uchun yangi suhbatda AI yordamchisiga o'zgartirishni tasvirlang:

> "dashboard-notice pluginini faqat administratorlarga xabar berishni ko'rsatishi uchun yangilang."

AI yangi versiyani yaratadi va u sandbox ichida hozirgi versiya bilan birga paydo bo'ladi. Siz diff (farq) ni ko'rib chiqing va yangilash qo'llanilishidan oldin tasdiqlang.

## HookScanner Integratsiyasi {#hookscanner-integration}

Plugin Builder har bir yaratilgan plugin tomonidan ro'yxatdan olingan hooklar va filterlarni tahlil qilish uchun integratsiyalashgan **HookScanner** dan foydalanadi. HookScanner natijalari chat javobida ko'rsatiladi va quyidagilarni o'z ichiga oladi:

- Ro'yxatdan olingan harakat hooklari (`add_action` chaqiruvlari).
- Ro'yxatdan olingan filter hooklari (`add_filter` chaqiruvlari).
- Plugin bog'liqliklarida topilgan har qanday hooklar (bu jarayonda `vendor/` va `node_modules/` kataloglarini tashlab yuboriladi).

Bu sizga pluginni faollashtirishdan oldin uning xarakteristikini tushunishga yordam beradi.

## Xavfsizlik Eslatmalar {#security-considerations}

- Yaratilgan pluginlar qo'lda o'rnatilgan pluginlardan alohida saqlanadi va ularga tarmoqda aniq o'rnatmagunchki standart WordPress plugin boshqaruv ekranidan ularga kirish mumkin emas.
- Sandbox fayllarni yozayotganda kataloglarni aylantirishni (directory traversal) oldini olish uchun yo'l tekshiruvidan foydalanadi.
- Xavfli funksiya chaqiruvlariga ega pluginlar (masalan, `eval`, `exec`, `system`) tekshiruv paytida belgilab qo'yiladi va faollashtirilmaydi.
