---
title: Domain Mahsulotlari va Narxi
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domen Mahsulotlari va Narxlari {#domain-products-and-pricing}

Domen mahsulotlari siz narxni, TLDlarni (Top-Level Domain) boshqarishingiz, WHOIS maxfiyligini sozlash va provayder tanlashni nazorat qilish uchun ishlatiladi. Har bir domen mahsuloti standart Multisite Ultimate mahsuloti bo'lib, uning qo'shimcha **Domain Settings** yorlig'i mavjud.

## Domen mahsuloti yaratish {#creating-a-domain-product}

1. **Network Admin › Ultimate Multisite › Products** ga o'ting
2. **Add New** ni bosing
3. Mahsulot turini **Domain** deb belgilang
4. **Domain Settings** yorlig'ini sozlang (quyida ko'ring)
5. Saqlash

Domen mahsulotlari mahsulotlar ro'yxatida purpura rangli **Domain** belgisi bilan paydo bo'ladi va ularni **Domain Products** yorlig'i orqali filtrlashingiz mumkin.

## Domain sozlamalari yorligi {#domain-settings-tab}

### Provayder (Provider) {#provider}

Bu mahsulot uchun ro'yxatdan o'tishni qaysi registrator boshqarishini tanlang. Bu global **Default provider** (Dastlabki provayder) sozlamalarida belgilangan bo'ladi.

### Qo'llab-quvvatlanadigan TLDlar (Supported TLDs) {#supported-tlds}

Boshqa hech qanday mahsulot bilan mos kelmaydigan barcha TLDlar uchun qo'llaniladigan **catch-all product** (umumiy mahsulot) yaratish uchun bo'sh qoldiring.

Faqat o'sha kengaytirishlar (extension) uchun tegishli bo'lgan TLDlar ro'yxatini kiritish uchun vergul bilan ajratilgan ro'yxatni kiriting (masalan, `.com, .net, .org`).

**Mahsulot moslashuvi qanday ishlaydi:** Mijoz domen qidirganida, qo'shimcha mahsulot eng aniq mos keladigan mahsulotni tanlaydi. TLD ro'yxatida `.com` bo'lgan mahsulot umumiy (catch-all) mahsulotdan oldin ustunlikka ega. Agar hech qanday TLD-specific mahsulot mos kelmasa, umumiy mahsulot ishlatiladi. Hech qanday mahsulotlar mavjud bo'lmasa, domen qidiruvi ko'rsatilmaydi.

### Markup turi (Markup type) {#markup-type}

Sizning yetkazib berish narxingizni (retail price) ombor narxidan (wholesale cost) qanday hisoblashini uchta rejim boshqaradi:

| Rejim | Qanday ishlaydi |
|---|---|
| **Percentage** (Foiz) | Ombor narxiga foiz qo'shiladi. 10 dollarli ombor domen uchun 20% markup berish 12 dollarga teng bo'ladi. |
| **Fixed markup** (Qat'iy markup) | Qat'iy pul miqdori qo'shiladi. 10 dollarli domen uchun 5 dollarli markup berish 15 dollarga teng bo'ladi. |
| **Fixed price** (Qat'iy narx) | Ombor narxini butunlay e'tiborsiz qoldiradi. Har doim siz kiritgan miqdorni to'laydi. |

### Kirish narxi (Introductory pricing) {#introductory-pricing}

### WHOIS maxfiyligi (WHOIS privacy) {#whois-privacy}

Bu, bu mahsul orqali ro'yxatdan olingan domenlar uchun WHOIS maxfiyligi himoyasi taklif qilinishini boshqaradi.

| Sozlama | Xulq-atvor |
|---|---|
| **O'chirilgan** (Disabled) | WHOIS maxfiyligi hech qachon taklif qilinmaydi yoki faollashtirilmaydi. |
| **Har doim kiritilgan** (Always Included) | WHOIS maxfiyligi ro'yxatdan olinishda bepul avtomatik faollashtiriladi. |
| **Mijoz tanlovi** (Customer Choice) | To'lov jarayonida chek-boks chiqadi. **Maxfiylik narxini** har yili to'lash uchun belgilashingiz mumkin, yoki uni bepul taklif qilish uchun $0 qilib qoldirishingiz mumkin. |

Namecheap uchun WHOIS maxfiyligi WhoisGuard (har doim bepul) dan foydalanadi. OpenSRS esa OpenSRS maxfiylik xizmatidan foydalanadi (toqqiz narxda qiymatli bo'lishi mumkin).

---

## TLD import va sinxronlash {#tld-import-and-sync}

Domen mahsulotlari ulanish orqali berilgan provayderdan olingan real vaqt rejimida toqqiz darajadagi narxlarni ko'rsatadi. Buni ishlatish uchun TLDlar (Top-Level Domains) import qilinishi kerak.

- **Manual sinxronlash:** Settings › Domain Seller › Sync TLDs (har provayder uchun)
- **Avtomatik sinxronlash:** Barcha sozlanmagan provayderlar bo'ylab belgilangan cron job orqali har kuni ishlaydi.

Sinxronlashdan so'ng, istalgan domen mahsulotining Domain Settings yorlig'iga o'ting va mavjud TLDlarni hozirgi toqqiz darajadagi narxlari bilan ko'rish uchun TLD tanlovchidan foydalaning.

---

## Avtomatik yangilash (Auto-renewal) {#auto-renewal}

Domenlar yangilanishi mijozning a'zo holatiga bog'liq:

- A'zo yangilang va domen bog'langanida, domen yangilanishi avtomatik ketma-ketlashtiriladi.
- Yangilash urinishlari mijozning faol to'lov eshigidan foydalanadi.
- Yangilanish muvaffaqiyatsiz bo'lganda ular eksponensial orqaga qaytarish (exponential backoff) bilan avtomatik takrorlanadi.
- Muvaqqatli yangilanishlar, muvaffaqiyatsizliklar va yakunlanishi yaqinlashgan holatlar uchun elektron pochta xabarlari yuboriladi.

Domen hayoti voqealariga kiruvchi elektron pochta shablon ID'lari:

| Hodisa | Template ID |
|---|---|
| Domen ro'yxatilgan | `domain_registered` |
| Domen yangilandi | `domain_renewed` |
| Yangilanish muvaffaqiyatsiz bo'ldi | `domain_renewal_failed` |
| Domen tez orada tugaydi | `domain_expiring_soon` |

---

## Admin: Domenni qo'lda ro'yxatdan o'tkazish {#admin-manual-domain-registration}

Mijozlar xarid jarayonidan o'tmasdan, ularni o'zidan domenini ro'yxatdan o'tkazish uchun quyidagi qadamlarni bajaring:

1. **Network Admin › Ultimate Multisite › Register Domain** (Tarmoq Administratori › Ultimate Multisite › Domenni ro'yxatdan o'tkazish) sahifasiga kiring.
2. Mijozni tanlang va domen nomini kiriting.
3. Ro'yxatdagi ma'lumotlarni to'ldiring (ism, manzil, telefon).
4. **Register** (Ro'yxatdan o'tkazish) tugmasini bosing.

Domen yozuvi yaratiladi va mijozning hisobiga bog'lanadi.
