---
title: A'zolik muddati tugashi va sayt bloklash
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# A'zo Bo'lish Muddati va Sayt Bloklash

Bu qo'llanma Ultimate Multisite ning a'zo bo'lish muddati tugashi, sinov davrlari yakunlanishi va frontend saytlarni bloklash jarayonini tushuntiradi. U a'zo bo'lishning faol holatdan tugagan holatgacha bo'lgan butun siklini, saytlar bloklanishini boshqaradigan sozlamalarni va a'zo muddati tugagandan so'ng saytlarning qanday kirish mumkinligini tekshirish kerak bo'lgan narsalarni o'z ichiga oladi.

## A'zo Bo'lish Holati Sikli {#membership-status-lifecycle}

Ultimate Multisite dagi har bir a'zo bo'lishning quyidagi holatlardan biri mavjud:

:::note Bepul a'zo bo'lishlar umr bo'yi
Bepul a'zo bo'lishlar avtomatik tugamaydi. Ultimate Multisite ularni umr bo'yi kirish sifatida ko'rib chiqadi, shuning uchun administrator holatini o'zgartirmasa yoki mijozni boshqa mahsulotga o'tkazmasa, ular muddati tekshiruvlarida hisoblanmaydi.
:::

| Holat | Ma'nosi |
|---|---|
| **Pending** | Birinchi to'lov yoki elektron tasdiqlanishni kutmoqda |
| **Trialing** | Faol sinov muddati, hali hech qanday to'lov yig'ilmagan |
| **Active** | To'langan va hozirgi holatdagi |
| **On Hold** | Yangi muddat uchun to'lov kutmoqda (faktura yaratilgan, to'lovni kutmoqda) |
| **Expired** | Muddati o'tgan va yangilashsiz kech qo'llanilish muddati tugagan |
| **Cancelled** | Mijoz yoki administrator tomonidan aniq bekor qilingan |

### A'zoliklar Qanday Tugallanishi (Expired) Holatiga O'tadi {#how-memberships-transition-to-expired}

Ultimate Multisite har soatda avtomatik tekshiruv o'tkazadi va a'zoliklar muddati tugaganligi sababli belgilanishi kerak bo'lgan a'zoliklarni qidiradi. Bu tekshiruv [Action Scheduler](https://actionscheduler.org/) (to'g'ridan-to'g'ri WP-Cron emas) orqali va `wu_membership_check` jadvallangan harakat sifatida ishlaydi.

Cheklov (expiration) tekshiruvi default holda **3 kunlik muddatli uzatma davriga ega**. A'zo bo'lish holati `date_expiration` o'tganidan 3 kundan keyin esa `expired` deb belgilanishi mumkin. Bu mijozlarga statuslar o'zgargandan oldin kechiktirilgan to'lovni amalga oshirish uchun vaqt beradi.

:::info
3 kunlik muddatli uzatma davri quyida tavsiflanadigan Frontend Block Grace Period sozlamasidan alohida hisoblanadi. Cheklov muddati status **active/on-hold** dan `expired` ga o'tgan paytda qachon o'zgarganini boshqaradi. Frontend blok muddatli uzatma davri esa status o'zgargandan keyin sayt qachon **bloklanishini** boshqaradi.
:::

#### Avtomatik yangilanuvchi va avtomatik yangilanmaydigan a'zo bo'lishliklar {#auto-renewing-vs-non-auto-renewing-memberships}

Bu farq cheklovning ishlashini tushunish uchun juda muhimdir:

- **Avtomatik uzaytirilmaydigan a'zoliklar** (`auto_renew = false`): Soatlik cron job butun siklni boshqaradi -- u yangi uzaytirish to'lovlarini yaratadi, a'zolikni "tozalashga olingan" holatga o'tkazadi va to'lov qabul qilinmagan bo'lsa oxir-oqibat uni muddati tugagan sifatida belgilaydi.

- **Avtomatik uzaytiriladigan a'zoliklar** (`auto_renew = true`): Cron muddati tekshiruvi **bularni butunlay o'tkazib yuboradi**. To'lov eshlab qoluvchisi (Stripe, PayPal va h.k.) obuna tugagan yoki bekor qilinganida Ultimate Multisite ga webhook orqali xabar berishi kutiladi. Agar webhook kelmasa -- noto'g'ri sozlangandishi, gateway ishlamay qolganligi yoki tizim tashqarisida bekor qilingan obuna tufayli -- a'zolik muddati o'tganidan keyin ham doimiy ravishda `active` (faol) bo'lib qolaveradi.

### Sinovlardan Qanday Yakunlanadi {#how-trials-end}

Sinov davri tugaganda, tizim:

1. тўловни тўлиқ алоқада (pending renewal payment) бериладиган янгиланиш ҳақидаги тўловни яратиб беради.
2. аъзолик статусини `trialing`дан `on-hold`га ўзгартиради.
3. мижозга янгиланиш тўлови ҳақида эслатма электрон хабарнома юборади.

Бу жараён дастурнинг одатдаги муддатни текшириш расми билан бир хил соатлик жадвалида ишга тушади, лекин **фақат автоматик янгиланиш бўлмаган аъзоликлар учун**. Автоматик янгиланиб бораётган тариботи (trial) учун тўлов этакчи (payment gateway) тариботан тўланган аъзоликка ўтиш ҳақидаги ўзгартиришларни бажаради.

## Frontend кириш блокларини бロッқлаш {#block-frontend-access}

Дефолт ҳолатда, аъзолик муддати тугагани ёки у тозаланиб қолса, **фақат `wp-admin` дашборни чекланади**. Сайтнинг оммавий фронтенди (frontend) мезонидан кириш учун очиқ қолади. Оммавий киришни ҳам бロッқлаш учун **Block Frontend Access** sozlamасини фаоллаштиришингиз керак.

### Созламаларни конфигурация қилиш {#configuring-the-setting}

**Ultimate Multisite > Settings > Memberships** ga o'ting va **Block Frontend Access** ni yoqing (enable qiling).

![Block Frontend Access sozlamalari, faollashgan tugma holati, 7 kunlik muddat va Frontend Block sahifasi tanlanishi ko'rsatilgan rasmi](/img/config/settings-membership-block-frontend.png)

Mana a'zolik sozlamalari sahifasining to'liq ko'rinishi:

![A'zolik sozlamalari to'liq sahifa](/img/config/settings-membership-full.png)

Bu xulq-atvorni boshqaradigan uchta bog'liq sozlamalar mavjud:

| Sozlamana | Tavsif | Default |
|---|---|---|
| **Bloklash (Frontend Access)** | Asosiy o'givat. Faollik muddati tugagan holda tarmoq saytlarining ommaviy oldingi qismini bloklaydi. | Off |
| **Frontend Bloklash Muddatini** | A'zo bo'lish faolligi bekor qilingandan so'ng bloklash uchun kutish kunlari soni. Darhol bloklash uchun `0` ga sozlang. | 0 |
| **Frontend Bloklanadigan Sahifa** | Sayt bloklanganida tashrif buyuruvchilarni qayta yo'naltirish uchun asosiy saytdagi sahifa. Agar sozlamasa, tashrif buyuruvchilar umumiy "Sayt mavjud emas" xabarini ko'rishadi. | Yo'q |

### Sayt Bloklanganda Tashrif Buyuruvchilar Nima Ko'radi {#what-visitors-see-when-a-site-is-blocked}

Frontend kirish bloklanganida, saytga kelgan tashrif buyuruvchilar quyidagilardan birini qiladi:

1. **Frontend Block Page**-da tanlangan sahifaga qayta yo'naltiriladi (agar sozlanmagan bo'lsa), yoki
2. **Default xabar ko'rsatiladi**: "Bu sayt hozircha mavjud emas" va sayt administratoriga kirish sahifasiga havolaning beriladi.

Sayt administratorlari login qila olishadi -- login sahifasi hech qachon bloklanmaydi.

### Nima Bloklanadi va Qachon {#what-gets-blocked-and-when}

Bloklash xulq-atvori a'zolik holatiga bog'liq:

| A'zolik Holati | Frontend Bloklandi? | Ommabop Muddat Qo'llaniladimi? |
|---|---|---|
| Faol (Active) | Yo'q | -- |
| Sinovdan o'tish (Trialing) | **Yo'q** (pastdagi eslatma ko'ring) | -- |
| Tozalashda (On Hold) | faol deb hisoblanadi -- bloklanmaydi | -- |
| Muddati tugagan (Expired) | **Ha**, agar Frontend kirish bloklash yoqilgan bo'lsa | Ha |
| Bekor qilingan (Cancelled) | **Ha**, har doim (sozlamalardan qat'i nazar) | **Yo'q** -- darhol bloklanadi |
| Kutilmoqda (Pending) | a'zolik tekshiruvi orqali bloklanmaydi | -- |

:::warning Trialing a'dan qolgan a'zoliklar bloklanmaydi
Sinov muddati tugagan bo'lsa ham, `trialing` holatidagi a'zolik **frontend**da bloklanmaydi. Sinov muddatidan keyin u avvalo boshqa holatga o'tishi kerak (odatda cron job orqali `on-hold` ga, so'ngra to'lov qilinmasa `expired` ga). Agar siz hali o'tmagan sinov muddati bo'lgan a'zoliklar ko'rsatayotgan bo'lsangiz, quyidagi muammolarni hal qilish bo'limini tekshirib ko'ring.
:::

:::note Bekor qilingan a'zoliklar favqulodda muddatdan tashqari bloklanadi
Bekor qilingan a'zoliklar Blok Frontend Access yoqilgan bo'lsa ham, muddati o'tganidan so'ng doim bloklanadi. Frontend Block Grace Period bekor qilingan a'zoliklar uchun **qo'llanilmaydi**.
:::

## Muammolarni hal qilish: Muddati o'tganidan keyin saytlar kirish mumkin bo'lishi {#troubleshooting-sites-remaining-accessible-after-expiration}



Agar saytlar aʼzo boʻlish muddati tugagandan keyin ommaviy (public) qolgan boʻlsa, quyidagi tekshiruvlarni ketma-ket bajarib koʻring:

### 1. Blokning Oldingi Qismga Kirish (Frontend Access) Sozlamasini Faollashtiring {#1-verify-the-block-frontend-access-setting-is-enabled}

**Ultimate Multisite > Settings > Memberships** ga o‘ting va **Block Frontend Access** tugmasi yoqilganligini tasdiqlang. Bu sozlama **standart holda o‘chirilgan** bo‘ladi, bu esa aʼzo boʻlish holati faollashtirilmagan (inactive) boʻlganda faqat wp-adminga cheklov qo‘yilishi degani.

### 2. Oldingi Qism uchun Cheklov Muddasini Tekshiring {#2-check-the-frontend-block-grace-period}

Ayni sozlamalar sahifasida **Frontend Block Grace Period** qiymatini tekshiring. Masalan, bu 7 kunga olingan boʻlsa, aʼzo boʻlish muddati tugaganidan 7 kun o‘tgachgacha oldingi qism bloklanmaydi — hatto aʼzo holati allaqachon `expired` (tugagan) bo‘lgan bo‘lsa ham.

Agar aʼzo boʻlish holati faollashtirilmaganlar uchun darhol bloklashni istasangiz, buni `0` ga sozlang.

### 3. A'zo Holatining Haqiqatan O'zgarganligini Tasdiqlash {#3-confirm-the-membership-status-has-actually-changed}

**Ultimate Multisite > Memberships** qismiga o'ting va ta'sir qilgan a'zolikning holatini tekshiring. Agar u muddati o'tgan bo'lsa ham hali ham `active` (faol) ko'rsatsa, holat o'zgarishi sodir bo'lmagan degani. Odatdagi sabablari:

- **A'zolik avtomatik yangilanishi:** A'zolik tahrirlash sahifasidagi `auto_renew` maydonini tekshiring. Agar avtomatik yangilanish yoqilgan bo'lsa, muddati o'tgan a'zolik uchun cron bu a'zolikni o'tkazib yuboradi — u to'lov portalidan (Stripe, PayPal) xatolik haqida ma'lumot olishiga tayanadi. Ultimate Multisite ko'rsatadigan holat bilan obuna holati mos kelishini tasdiqlash uchun portalingizdagi (Stripe, PayPal) dashboardni tekshiring.

- **cron ishlamagan:** Keyingi qadamga qarang.

### 4. Action Scheduler Ishlayotganini Tasdiqlash {#4-verify-action-scheduler-is-running}

Ultimate Multisite o'zining cron joblari uchun Action Scheduler dan foydalanadi. Network admin panelida **Tools > Scheduled Actions** (Vositalar > Jadvallangan harakatlar) bo'limiga kiring va quyidagilarni qidiring:

- **`wu_membership_check`** -- Bu har soatda ishlaydigan takrorlanuvchi harakat sifatida ko'rinishi kerak. Agar u yo'q bo'lsa, a'zolik tekshiruvlari jadvalga qo'yilmagan.
- **`wu_async_mark_membership_as_expired`** -- Bular aniq a'zoliklarni tugagan deb belgilash uchun individual vazifalardir. Agar sizda bu yerda muvaffaqiyatsiz bajarilgan harakatlar ko'rsangiz, ular xatolik sabablarini tushuntiruvchi xatolik xabarlarini o'z ichiga olishi mumkin.

Agar siz qulab qolgan yoki muvaffaqiyatsiz bajarilgan harakatlarni ko'rsangiz, bu Action Scheduler bilan bog'liq muammo bo'lishi mumkin. Odatdagi sabablari:

- `wp-config.php` faylida tizim darajasidagi cron o'rnini bosmaydigan holda **`DISABLE_WP_CRON`** ning qiymati `true` sozlanishi
- Past sayt trafik (Low site traffic) -- WP-Cron faqat kimdir saytga kirganida ishlaydi

Ishonchli cron ishga tushishi uchun tizim cron job'ini sozlang:

```bash
# Har 5 daqiqada wget orqali ishga tushirish
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Yoki WP-CLI orqali
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Gateway Webhook muammolarini tekshirish (Avtomatik yangilanuvchi a'zoliklar) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Agar a'zolik avtomatik yangilansa va gateway obunasi bekor qilingan yoki muvaffaqiyatsiz bo'lgan bo'lsa, lekin Ultimate Multisite uni `active` (faol) ko'rsatib turgan bo'lsa:

- **Stripe**: Stripe Dashboard'ga kiring > Customers bo'limiga o'ting va obuna holatini tekshiring. Keyin Developers > Webhooks orqali webhook endpoint'ning faol ekanligini tasdiqlang. Bu endpoint sizning saytingizga ishora qilishi va muvaffaqiyatli yetkazib berishlarni ko'rsatishi kerak.
- **PayPal**: PayPal biznes hisobingizdagi obuna holatini tekshiring va IPN/webhook yetkazib berilishini tasdiqlang.

Agar gateway obunani bekor deb ko'rsatsa, lekin Ultimate Multisiteda shunday bo'lmasa, ehtimol webhook xabari yo'qqa qolib ketgan. Siz **Ultimate Multisite > Memberships > [Edit Membership]** orqali a'zolik holatini qo'lda o'zgartirishingiz mumkin.

### 6. Muddatlarni Tekshirish (Cron Darajasi) {#6-check-the-expiration-grace-period-cron-level}

Cron tekshiruvi ham o'zining osonlik davri (default: 3 kun) mavjud, bu esa a'zolikni tugatilgan deb belgilashdan oldin sodir bo'ladi. Bu frontend blokning osonlik davriga nisbatan alohida hisoblanadi. Sayt bloklanishdan oldingi umumiy vaqt quyidagicha bo'lishi mumkin:

**Tugash uchun osonlik davri (3 kun)** + **Frontend blokning osonlik davri (siz sozlamangiz)** = Umumiy kechikish

Masalan, default sozlamalar va 7 kunlik frontend osonlik davri bilan, sayt haqiqatdan ham bloklanishidan oldin `date_expiration` dan keyin 10 kungaча vaqt ketishi mumkin.

### 7. A'zolikni qo'lda tugatish {#7-manually-expire-a-membership}

Agar siz cron siklini kutmasdan darhol saytni bloklash kerak bo'lsa, a'zolik holatini qo'lda o'zgartirishingiz mumkin:

1. **Ultimate Multisite > Memberships** ga kiring
2. Ta'sir qilayotgan a'zolikka bosing
3. Holatni **Expired** (Tugatilgan) yoki **Cancelled** (Bekor qilingan) deb o'zgartiring
4. **Save** (Saqlash) tugmasini bosing

Frontend block yangi sahifa yuklanganda amalga oshadi (vazifalar muddati tugagan a'zoliklar uchun Frontend Block Grace Period yoki bekor qilingan a'zoliklar uchun darhol).

## Xulosa {#summary}

tugash sanasidan sayt bloklanishigacha bo'lgan to'liq muddat:

```text
date_expiration o'tib ketadi
       |
       v
  [3 kunlik cron grace period]     <-- a'zolik hali faol/tozalash holatida ko'rinadi
       |
       v
  Cron a'zolikni "tugagan" deb belgilaydi
       |
       v
  [Frontend Block Grace Period]  <-- Settings > Memberships da sozlanadi
       |
       v
  Sayt frontend bloklanadi
```

Bekor qilingan a'zoliklar uchun yo'l qisqaroq:

```text
  A'zolik bekor qilindi
       |
       v
  date_expiration o'tib ketadi (grace period yo'q)
       |
       v
  Sayt frontend darhol bloklanadi
```

## Developer Reference {#developer-reference}

Quyidagi hooklar va filterlar sizga muddati tugash (expiration) va bloklash xatti-harakatini sozlash imkonini beradi:

| Hook/Filter | Tavsif |
|---|---|
| `wu_membership_grace_period_days` | A'zo bo'lish muddati (grace period) kunlarini cheklash, a'zolik tugagan deb belgilanishidan oldin. (default: 3) |
| `wu_schedule_membership_check_interval` | A'zolik tekshiruvlari orasidagi vaqt oralig'ini cheklash. (default: 1 soat) |
| `wu_membership_renewal_days_before_expiring` | Yangilanish to'lovidan qancha kun oldin tugashdan oldin yangilashni yaratishni cheklash. (default: 3) |
| `wu_blocked_site_reactivation_url` | Sayt bloklanganida maxsus qayta faollashtirish URL'ini taqdim etish uchun cheklash. |
| `wu_membership_is_active` | A'zolik faol deb hisoblanishi kerakmi, shuni belgilash uchun cheklash. |
| `wu_membership_expired_check_query_params` | Tugagan a'zoliklarni topishda ishlatiladigan so'rov parametrlarini (query parameters) cheklash. |

| `wu_membership_trial_check_query_params` | Vayron bo'lgan sinovlardan foydalanish uchun ishlatiladigan so'rov parametrlarini filtrlash |
