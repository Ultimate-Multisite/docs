---
title: Membership Expiration and Site Blocking
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# A'zolik Muddati Tugashi va Saytni Bloklash {#membership-expiration-and-site-blocking}

Bu qo'llanma Ultimate Multisite qanday qilib a'zolik muddati tugashini, sinov muddati yakunlanishini va saytning old tomonini (frontend) bloklashini tushuntiradi. U a'zolikning faol holatdan tugagan holatgacha bo'lgan siklini, saytlarning bloklanishini boshqaradigan sozlamalarni va a'zolik tugagandan keyin saytlar hali ham kirish imkoniyatiga ega bo'lsa, nimalarni tekshirish kerakligini qamrab oladi.

## A'zolik Holati Sikli {#membership-status-lifecycle}

Ultimate Multisite'dagi har bir a'zolik quyidagi holatlardan biriga ega:

:::note Free memberships are lifetime
Bepul a'zoliklar avtomatik tugamaydi. Ultimate Multisite ularni umr bo'yi foydalanish sifatida ko'radi, shuning uchun ular administrator holatini o'zgartirmasa yoki mijozni boshqa mahsulotga o'tkazmasa, tugash tekshiruvlariga kiritilmaydi.
:::

| Status | Ma'nosi |
|---|---|
| **Pending** | Birinchi to'lovni yoki elektron pochta tasdiqlovini kutmoqda |
| **Trialing** | Faol sinov muddati, hali to'lov olingan emas |
| **Active** | To'langan va amal qiluvchi |
| **On Hold** | Yangilash to'lovi kutishda (raqam yozilgan, to'lov kutilmoqda) |
| **Expired** | Muddati tugagan va yangilanganligi bo'yicha lutfat muddati o'tgan |
| **Cancelled** | Mijoz yoki administrator tomonidan aniq bekor qilingan |

### A'zoliklar Qanday Qilib Tugagan Holatga O'tadi {#how-memberships-transition-to-expired}

Ultimate Multisite har soatda a'zoliklar ro'yxatini tekshiradigan fon tekshiruvini amalga oshiradi va tugagan deb belgilanishi kerak bo'lgan a'zoliklarni qidiradi. Bu tekshiruv [Action Scheduler](https://actionscheduler.org/) (to'g'ridan-to'g'ri WP-Cron emas) dan foydalanadi va `wu_membership_check` nomli jadvalga kiritilgan harakat sifatida ishlaydi.

Tugash tekshiruvi standart sifatida **3 kunlik ichki lutfat muddatiga** ega. A'zolik uning `date_expiration` sanasi o'tganidan keyin 3 kun davom etmasa, `expired` deb belgilanilmaydi. Bu mijozlarga holati o'zgarishidan oldin kechikgan to'lovni amalga oshirish uchun vaqt beradi.

:::info
3 kunlik tugash lutfat muddati quyida tasvirlangan Frontend Block Grace Period sozlamasidan ajralgan. Tugash lutfat muddati **statusning** faol/on-hold holatdan tugagan holatga o'zgarishini boshqaradi. Frontend bloklash lutfat muddati esa status allaqachon o'zgarganidan keyin **sayt bloklanishini** boshqaradi.
:::

#### Avtomatik Yangilanish vs. Avtomatik Yangilanish Bo'lmagan A'zoliklar {#auto-renewing-vs-non-auto-renewing-memberships}

Bu farq tugash xatti-harakatini tushunish uchun juda muhim:

- **Avtomatik yangilanmaydigan a'zoliklar** (`auto_renew = false`): Soatlik cron ishlaydigan vazifasi butun siklni boshqaradi — u yangilash to'lovlarini yaratadi, a'zolikni on-hold holatiga o'tkazadi va oxir-oqibat to'lov olinmasa, uni tugagan deb belgilaydi.

- **Avtomatik yangilanadigan a'zoliklar** (`auto_renew = true`): Cron tugash tekshiruvi **ularni butunlay e'tibordan chetda qoldiradi**. To'lov shlyuz (Stripe, PayPal va boshqalar) obunalar muvaffaqiyatsiz yoki bekor qilinganida Ultimate Multisite'ga vebhook orqali xabar yuborishi kutiladi. Agar vebhook kelmasa — bu noto'g'ri sozangan endpoint, shlyuz uzilishi yoki tizim tashqarisida bekor qilingan obunalar tufayli — a'zolik tugash sanasi o'tganidan keyin ham cheksiz vaqt davomida `active` bo'lib qolishi mumkin.

### Sinov Muddati Qanday Yakunlanadi {#how-trials-end}

Sinov muddati tugagan a'zolikning muddati tugaganda, tizim:

1. To'liq obuna miqdori bilan kutishdagi yangilash to'lovini yaratadi
2. A'zolik statusini `trialing` dan `on-hold` holatiga o'tkazadi
3. Mijozga yangilash to'lovini haqida elektron pochta xabarini yuboradi

Bu jarayon odatiy tugash tekshiruvi bilan bir xil soatlik jadvalda ishlaydi, lekin **faqat avtomatik yangilanmaydigan a'zoliklar uchun**. Avtomatik yangilanadigan sinovlar uchun to'lov shlyuzi sinovdan to'langan obunaga o'tishni boshqaradi.

## Frontend Kirishini Bloklash {#block-frontend-access}

Standart sozlamalarga ko'ra, a'zolik tugaganda yoki on-hold holatga o'tganida, **faqat wp-admin dashboard cheklangan bo'ladi**. Saytning jamoat old tomoni (public frontend) tashrif buyuruvchilarga ochiq qoladi. Jamoat kirishini ham bloklash uchun **Block Frontend Access** sozlamasini yoqishingiz kerak.

### Sozlamani Konfiguratsiya Qilish {#configuring-the-setting}

**Ultimate Multisite > Settings > Memberships** bo'limiga o'ting va **Block Frontend Access** ni yoqing.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Mana a'zolik sozlamalar sahifasining to'liq ko'rinishi:

![Membership settings full page](/img/config/settings-membership-full.png)

Bu xatti-harakatni boshqaradigan uchta bog'liq sozlama mavjud:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Asosiy tugma. Yoqilgan bo'lsa, a'zolik faol bo'lmaganda tarmoqdagi saytlarning jamoat old tomonini bloklaydi. | Off |
| **Frontend Block Grace Period** | A'zolik faol bo'lmaganidan keyin bloklashgacha kutish kunlari soni. Darhol bloklash uchun `0` ga sozlang. | 0 |
| **Frontend Block Page** | Sayt bloklanganida tashrif buyuruvchilarni yo'naltiriladigan asosiy sayt sahifasi. Agar sozlanmagan bo'lsa, tashrif buyuruvchilar umumiy "Sayt mavjud emas" xabarini ko'rishadi. | None |

### Sayt Bloklanganida Tashrif Buyuruvchilar Nima Ko'rishadi {#what-visitors-see-when-a-site-is-blocked}

Frontend kirish cheklanganda, saytga tashrif buyuruvchilar quyidagilardan birini ko'rishadi:

1. **Yo'naltiriladi** — agar **Frontend Block Page** da tanlangan bo'lsa, shu sahifaga; yoki
2. **Standart xabar ko'rishadi**: "This site is not available at the moment." va sayt administratorining login sahifasiga havolasi.

Sayt administratorlari hali ham kirishi mumkin — login sahifasi hech qachon bloklanmaydi.

### Nima va Qachon Bloklanadi {#what-gets-blocked-and-when}

Bloklash xatti-harakati a'zolik holatiga bog'liq:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Yo'q | -- |
| Trialing | **Yo'q** (quyidagi eslatmaga qarang) | -- |
| On Hold | Faol deb hisoblanadi -- bloklanmaydi | -- |
| Expired | **Ha**, agar Block Frontend Access yoqilgan bo'lsa | Ha |
| Cancelled | **Ha**, har doim (sozlamadan qat'i nazar) | **Yo'q** -- darhol bloklanadi |
| Pending | A'zolik tekshiruvi orqali bloklanmaydi | -- |

:::warning Trialing memberships are not blocked
Sinov muddati tugagan bo'lsa ham, `trialing` holatidagi a'zolik ****frontendda bloklanmaydi**. Sinov avvalo boshqa holatga (odatda cron vazifasi orqali `on-hold`, keyin to'lanmagan bo'lsa `expired`) o'tishi kerak. Agar siz sinov muddati tugagan, ammo holati o'zgarmagan a'zoliklarni ko'rayotgan bo'lsangiz, quyidagi muammolarni hal qilish bo'limini tekshiring.
:::

:::note Cancelled memberships bypass the grace period
Bekor qilingan a'zoliklar, Block Frontend Access yoqilgan bo'lishidan qat'i nazar, tugash sanasi o'tganidan keyin har doim bloklanadi. Frontend Block Grace Period bekor qilingan a'zoliklarga ta'sir qilmaydi.
:::

## Muammolarni Hal Qilish: Tugagandan Keyin Saytlar Nima Uchun Kirishga Yo'l Qo'yadi {#troubleshooting-sites-remaining-accessible-after-expiration}

Agar a'zolik tugaganidan keyin saytlar jamoat uchun kirishga ochiq qolsa, quyidagi tekshiruvlarni tartibda bajaring:

### 1. Block Frontend Access Sozlamasi Yoqilganligini Tasdiqlang {#1-verify-the-block-frontend-access-setting-is-enabled}

**Ultimate Multisite > Settings > Memberships** sahifasiga kiring va **Block Frontend Access** tugmasi yoqilganligini tasdiqlang. Bu sozlama **standart jihatdan o'chirilgan** bo'lib, bu degani a'zolik faol bo'lmaganda faqat wp-admin cheklanadi.

### 2. Frontend Block Grace Period ni Tekshiring {#2-check-the-frontend-block-grace-period}

Xuddi shu sozlamalar sahifasida **Frontend Block Grace Period** qiymatini tekshiring. Agar bu 7 kun deb sozlanganda, frontend a'zolik muddati tugaganidan 7 kun o'tgunga qadar bloklanmaydi — hatto a'zolik holati allaqachon `expired` bo'lsa ham.

Darhol bloklashni istasangiz, uni `0` ga sozlang.

### 3. A'zolik Holati Haqiqatda O'zgarganligini Tasdiqlang {#3-confirm-the-membership-status-has-actually-changed}

**Ultimate Multisite > Memberships** sahifasiga kiring va tegishli a'zolik holatini tekshiring. Agar tugash sanasi o'tgan bo'lsa ham, u hali ham `active` ko'rsatayotgan bo'lsa, status o'tishi sodir bo'lmagan. Ko'pincha sabablar:

- **A'zolik avtomatik yangilanmoqda**: A'zolik tahrirlash sahifasidagi `auto_renew` maydonini tekshiring. Agar avtomatik yangilash yoqilgan bo'lsa, tugash cron vazifasi bu a'zolikni tashlab yuboradi — u muvaffaqiyatsizlikni xabar qilish uchun to'lov shlyuziga tayanadi. Ultimate Multisite ko'rsatgan holat to'g'ri kelishini tasdiqlash uchun shlyuz dashboardingizga (Stripe, PayPal) kiring.

- **Cron vazifasi ishlamagan**: Keyingi qadamga qarang.

### 4. Action Scheduler Ishlayotganligini Tasdiqlang {#4-verify-action-scheduler-is-running}

Ultimate Multisite o'z cron vazifalari uchun Action Scheduler dan foydalanadi. Tarmoq administratoridagi **Tools > Scheduled Actions** bo'limiga kiring va quyidagilarni qidiring:

- **`wu_membership_check`** — Bu har soatda ishlaydigan takrorlanuvchi harakat sifatida ko'rinishi kerak. Agar u yo'q bo'lsa, a'zolik tekshiruvlari jadvalga kiritilmayotgan.
- **`wu_async_mark_membership_as_expired`** — Bular muayyan a'zoliklarni tugagan deb belgilash uchun individual vazifalardir. Agar bu yerda muvaffaqiyatsiz harakatlar ko'rsangiz, ular nima uchun muammoli ekanligini tushuntiruvchi xatolik xabarlarini o'z ichiga olishi mumkin.

Agar siz to'xtab qolgan yoki muvaffaqiyatsiz harakatlarni ko'rsangiz, Action Scheduler bilan bog'liq muammo bo'lishi mumkin. Ko'pincha sabablar:

- `wp-config.php` faylida **`DISABLE_WP_CRON`** `true` deb o'rnatilgan, lekin tizim darajasidagi cron almashtirish yo'q.
- **Saytga kam trafik** — WP-Cron faqat kimdir saytga kirganda ishlaydi.

Ishonchli cron bajarilishini ta'minlash uchun tizim cron vazifasini sozlang:

```bash
# wget yordamida har 5 daqiqa yonida ishga tushirish
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Yoki WP-CLI orqali
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Shlyuz Webhook Muammolarini Tekshiring (Avtomatik Yangilanadigan A'zoliklar) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Agar a'zolik avtomatik yangilanayotgan bo'lsa va shlyuz obunasi bekor qilingan yoki muvaffaqiyatsiz bo'lsa, lekin Ultimate Multisite hali ham uni `active` deb ko'rsatayotgan bo'lsa:

- **Stripe**: Stripe Dashboard > Customers sahifasiga kiring va obuna holatini tekshiring. Keyin Developers > Webhooks ostida vebhook endpointi faol ekanligini tasdiqlang. Endpoint saytingizga ishora qilishi va muvaffaqiyatli yetkazilganlikni ko'rsatishi kerak.
- **PayPal**: PayPal biznes hisobingizda obuna holatini tekshiring va IPN/webhook yetkazilishini tasdiqlang.

Agar shlyuz obunani bekor qilgan bo'lsa, lekin Ultimate Multisite qilmagan bo'lsa, vebhook xabari yo'qotilgan bo'lishi mumkin. Siz **Ultimate Multisite > Memberships > [Edit Membership]** da a'zolik holatini qo'lda o'zgartirishingiz mumkin.

### 6. Tugash Lutfat Muddatini Tekshiring (Cron Darajasi) {#6-check-the-expiration-grace-period-cron-level}

Cron tekshiruvi o'z lutfat muddatiga (standart: 3 kun) ega, bu a'zolikni tugagan deb belgilashdan oldin. Bu frontend bloklash lutfat muddatidan ajralgan. Sayt bloklanishgacha bo'lgan umumiy vaqt quyidagicha bo'lishi mumkin:

**Tugash lutfat muddati (3 kun)** + **Frontend bloklash lutfat muddati (sizning sozlamangiz)** = Umumiy kechikish

Masalan, standart sozlamalar va 7 kunlik frontend lutfat muddati bilan, sayt haqiqatda bloklanishidan oldin 10 kungacha vaqt o'tishi mumkin.

### 7. A'zolikni Qo'lda Tugatish {#7-manually-expire-a-membership}

Agar cron siklini kutmasdan saytni darhol bloklash kerak bo'lsa, siz a'zolik holatini qo'lda o'zgartirishingiz mumkin:

1. **Ultimate Multisite > Memberships** sahifasiga kiring
2. Tegishli a'zolikni bosing
3. Holatini **Expired** yoki **Cancelled** ga o'zgartiring
4. **Save** tugmasini bosing

Frontend bloklash keyingi sahifa yuklanishida kuchga kiradi (tugagan a'zoliklar uchun Frontend Block Grace Periodga, yoki bekor qilingan a'zoliklar uchun darhol amalga oshiriladi).

## Xulosa {#summary}

Tugash sanasidan sayt bloklanishgacha bo'lgan to'liq vaqt chizmasi:

```text
date_expiration o'tadi
       |
       v
  [3 kunlik cron lutfat muddati]     <-- a'zolik hali ham faol/on-hold ko'rinadi
       |
       v
  Cron a'zolikni "expired" deb belgilaydi
       |
       v
  [Frontend Block Grace Period]  <-- Settings > Memberships da sozlanadi
       |
       v
  Saytning frontendi bloklanadi
```

Bekor qilingan a'zoliklar uchun yo'l qisqaroq:

```text
  A'zolik bekor qilingan
       |
       v
  date_expiration o'tadi (lutfat muddati yo'q)
       |
       v
  Saytning frontendi darhol bloklanadi
```

## Developer Referensi {#developer-reference}

Quyidagi hook va filterlar tugash va bloklash xatti-harakatlarini sozlash imkonini beradi:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | A'zolikni tugagan deb belgilashdan oldin lutfat muddati kunlarini filtrlash (standart: 3) |
| `wu_schedule_membership_check_interval` | A'zolik tekshiruvlari orasidagi intervallni filtrlash (standart: 1) |
| `w` | |
