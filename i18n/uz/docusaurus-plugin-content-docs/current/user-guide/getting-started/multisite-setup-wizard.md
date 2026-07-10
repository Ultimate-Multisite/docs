---
title: Multisite Sozlamasi Asistenti
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Sozlash Vazirasi {#multisite-setup-wizard}

Ultimate Multisite ichida standart WordPress o'rnatmasini avtomatik ravishda WordPress Multisite tarmog'iga aylantiradigan ichki vazifani (wizard) mavjud. Bu sizdan `wp-config.php` faylini qo'lda tahrirlash yoki ma'lumotlar bazasi buyruqlarini ishga tushirish zaruriyatini yo'q qiladi.

:::tip
Agar WordPress o'rnatmasi allaqachon Multisite tarmog'i sifatida ishlayotgan bo'lsa, siz bu qadamni butunlay tashlab yuborishingiz mumkin. Vaziralar faqat Multisite hali faollashtirilmaganida ko'rinadi.
:::

## Vaziralar Qachon Ko'rinadi? {#when-does-the-wizard-appear}

Standart (Multisite bo'lmagan) WordPress o'rnatmasiga Ultimate Multisite ni faollashtirganda, plugin Multisite faollashtirilmaganligini aniqlaydi va sizni oddiy sozlash vazirasi o'rniga Multisite Sozlash Vazirasi bilan avtomatik ravishda yo'naltiradi.

Buni shuningdek **WP Admin > Ultimate Multisite > Multisite Setup** orqali bevosita ham ko'rishingiz mumkin.

## Oldingi Shartlar (Prerequisites) {#prerequisites}

Vazirani ishga tushirishdan oldin quyidagilarga ishonch hosil qiling:

- WordPress o'rnatmasiga **administrator huquqlaringiz** bo'lishi kerak
- Serveringizdagi `wp-config.php` fayli veb server tomonidan **yozishga ruxsat berilgan** bo'lishi kerak
- Fayllaringiz va ma'lumotlar bazangizning **sobiq nusxasi (backup)** mavjud bo'lishi kerak

:::warning
Vaziralar sizning `wp-config.php` faylingizni o'zgartiradi va yangi ma'lumotlar bazasi jadvallarini yaratadi. Davom etishdan oldin har doim nusxani bering.
:::

## 1-Qadam: Xayrli kelibsiz (Welcome) {#step-1-welcome}

Birinchi ekran WordPress Multisite nima ekanligini va vaziraning nimani qilishi haqida tushuntiradi:

- WordPress konfiguratsiyasida Multisite xususiyatini faollashtirish
- Kerakli tarmoq ma'lumotlar bazasi jadvallarini yaratish
- `wp-config.php` fayliga kerakli multisite konstantalarini qo'shish
- Tarmoq bo'ylab Ultimate Multisite ni faollashtirish

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Davom etish uchun **Continue** (Davom etish) tugmasini bosing.

## 2-Qadam: Tarmoq Konfiguratsiyasi (Network Configuration) {#step-2-network-configuration}

Bu qadam sizga tarmoq sozlamalaringizni konfiguratsiya qilishni so'raydi.

### Sayt Tuzilishi (Site Structure) {#site-structure}

Ishlab network saytlaringizni qanday tashkil qilishni tanlang:

- **Sub-domainlar** (Tavsiya etiladi) — Har bir sayt o'ziga xos sub-domenga ega bo'ladi, masalan `site1.yourdomain.com`
- **Sub-kataklar** — Saytlar yo'l sifatida yaratiladi, masalan `yourdomain.com/site1`

:::note
Agar siz sub-domenlarni tanlasangiz, domen uchun **wildcard DNS** va **wildcard SSL sertifikatini** sozlash kerak bo'ladi. Ko'pgina boshqariladigan WordPress mehmalari buni avtomatik amalga oshiradi. Batafsil taqqoslash uchun [Ultimate Multisite 101](https://ultimate-multisite-101) ni ko'ring.
:::

### Network Titli (Network Title) {#network-title}

Jamoangiz uchun nom kiriting. Bu sizning hozirgi sayt sarlavhasi "Network" so'zi bilan tugallanadi. Buni keyinchalik network sozlamalaridan o'zgartirishingiz mumkin.

### Network Administrator Email {#network-admin-email}

Networkni boshqarish haqidagi xabarlarni yuborish uchun ishlatiladigan elektron pochta manzili. Bu hozirgi foydalanuvchining elektron pochta manziliga avtomatik ravishda o'rnatiladi.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Maydonlarni to'ldirgandan so'ng, davom etish uchun **Continue** tugmasini bosing.

## 3-qadam: O'rnatish (Installation) {#step-3-installation}

Boshlash uchun **Install** tugmasini bosing. Wizard beshta avtomatlashtirilgan qadamni ketma-ket bajaradi va har bir qadamning holatini real vaqtda ko'rsatadi:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Қадам | Сипаттамасы |
|---|---|
| **Мультисайтты іске қосу** | `wp-config.php` файлына `WP_ALLOW_MULTISITE` тұрақтысын (constant) қосу |
| **Желіні құру** | мультисайт базалық кестелерін (`wp_site`, `wp_sitemeta`, `wp_blogs` және т.б.) жасау және оларды желі конфигурацияңызбен толтыру |
| **Конфигурацияны жаңарту** | `wp-config.php` файлына соңғы мультисайт тұрақтыларын (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` және т.б.) қосу |
| **Кукилерді түзету** | Активациядан кейін аутентификация мәселелері туындамауы үшін желі метадетасында сайт URL-ің дұрыс екенін қамтамасыз ету |
| **Желі плагинін іске қосу** | Ultimate Multisite-ты желі бойынша іске қосу, оның бүкіл желіде жұмыс істеуін қамтамасыз ету |

Әр қадам келесідей мәндердің бірін көрсетеді:

- **Pending (Күтіп отыр)** — өңделгені күтіп тұр
- **Installing... (Орнатылып жатыр...)** — Қазір жұмыс істеп жатыр
- **Success! (Сәтті!)** — Сәтті аяқталды
- **Error message (Қате хабарлама)** — Қателік туындады (хабарлама мәселені сипаттайды)

Барлық қадамдар сәтті аяқталған кезде, әр тармақ үшін жасыл "Success!" статусын көресіз:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Содан кейін визуалды құрал автоматты түрде аяқтау экранына өтеді.

## 4-ші қадам: Аяқтау {#step-4-complete}

Орнату аяқталған кезде, WordPress Multisite іске қосылғанын растайтын сәттілік хабарламасын көресіз.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Енді WaaS платформаңызды (компания мәліметтері, стандартты контент, төлем қабылдаушылары және т.б.) конфигурациялау үшін Ultimate Multisite орнату визуалды құралымен жалғастыруға болады.

:::note
Multisite o'rnatmasi yakunlangandan so'ng, brauzeringiz yangi faollashtirilgan tarmoq administrator orqali yo'naltiriladi. Multisite muhiti uchun autentifikatsiya cookie-lari yangilanganligi sababli sizdan yana kirish talab qilinishi mumkin.
:::

## Qo'lda sozlash (Manual Setup) {#manual-setup-fallback}

Agar wizard fayl huquqlari yoki server cheklovlari tufayli `wp-config.php` fayliga yozish qila olmasa, u sizga qo'shishingiz kerak bo'lgan aniq kodni ko'rsatadi:

1. `/* That's all, stop editing! */` qatoridan yuqoriga qo'shilishi kerak bo'lgan **wp-config.php konstantalari**
2. Tanlagan sayt tuzilmangiz (subdomain yoki subdirektoriy) uchun mos keladigan **.htaccess qayta yozish qoidalari (rewrite rules)**

Qo'lda o'zgartirishlardan so'ng, sahifani yangilang va wizard multisite endi faol ekanligini aniqlaydi.

## Muammolarni hal qilish (Troubleshooting) {#troubleshooting}

### Wizard `wp-config.php` yozilmayotganini aytmoqda {#the-wizard-says-wp-configphp-is-not-writable}

Veb-server jarayonida `wp-config.php` fayliga yozish huquqi bo'lishi kerak. Siz quyidagilardan birini bajara olasiz:

- Fayl huquqlarini vaqtinchalik `644` yoki `666` qilib o'zgartiring
- Wizard tomonidan taqdim etilgan qo'lda sozlash (manual setup) ko'rsatmalari orqali foydalaning
- Hosting provayderidan yordam so'rang

### Sozlanishdan keyin saytlarga kirish mumkin emas (subdomainlar) {#sites-are-not-accessible-after-setup-subdomains}

Agar siz subdomain tuzilishini tanlagan bo'lsangiz, domen uchun **wildcard DNS** sozlamasini konfiguratsiya qilishingiz kerak. Quyidagi DNS yozuvini qo'shing:

```
Type: A (yoki CNAME)
Host: *
Value: [sizning server IP manzilingiz]
```

Bu qanday sozlashni bilmasangiz, hosting provayderingiz bilan tekshirib ko'ring.

### Sozlanishdan keyin autentifikatsiya muammolari {#authentication-issues-after-setup}

Multisite sozlamasidan so'ng siz chiqib ketgan bo'lsangiz yoki cookie xatolarini boshdan kechirsangiz:

1. Brauzeringizdagi sayt cookie-larini tozalang
2. `yourdomain.com/wp-login.php` orqali yana kirish qiling
3. Muammo davom etsa, `wp-config.php` faylingizda `COOKIE_DOMAIN` ning `false` ga o'rnatilmaganligini tekshiring — bu subdomain multisite o'rnatmalarida ma'lum bir muammo.

### O'rnatish jarayonida bir qadam muvaffaqiyatsiz bo'ldi {#a-step-failed-during-installation}

Agar o'rnatish bosqichlaridan biri xato bersa:

1. Ko'rsatilgan xatolik xabarini yozib qo'ying.
2. Konfiguratsiya bosqichiga qaytib, yana bir bor urinib ko'ring.
3. Agar xato davom etsa, serveringizning PHP xato logini tekshirib ko'ring, undan ko'proq ma'lumot olishingiz mumkin.
4. Oldindan muvaffaqiyatli yakunlangan bosqichlar keyingi ishga tushirishlarda o'tkazilmaydi (installer idempont).
