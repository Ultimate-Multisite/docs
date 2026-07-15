---
title: '9-dars: Foyda uchun narx belgilash'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# 9-dars: Foyda uchun narxlash

5-darsda FitSite tariflari uchun boshlang‘ich narxlarni belgilagan edik. Endi daromadni oshiradigan, yuqoriroq tariflarga o‘tishni rag‘batlantiradigan va churnni kamaytiradigan usullar bilan narxlash strategiyasini takomillashtiramiz.

## Qayerda to‘xtagan edik {#where-we-left-off}

FitSite’da tariflar, shablonlar, checkout, brending va onboarding tayyor. Boshlang‘ich narxlash oyiga $49/$99/$199 edi. Endi bu narxlashni yanada samaraliroq qilamiz.

## Niche platformalar uchun narxlash tamoyillari {#pricing-principles-for-niche-platforms}

### Xarajatga emas, qiymatga qarab narx belgilang {#price-on-value-not-cost}

Hosting xarajatlaringiz har bir mijoz sayti uchun $5-$15 bo‘lishi mumkin. Bu narxingiz $20 bo‘lishi kerak degani emas. Siz hosting sotmayapsiz. Siz quyidagilarni sotyapsiz:

- Maxsus ishlab chiqish $2,000-$5,000 turadigan professional fitness veb-sayt
- Ular o‘ylab o‘tirmasligi kerak bo‘lgan doimiy texnik xizmat, yangilanishlar va xavfsizlik
- Umumiy builderlar taklif qilmaydigan nichega xos funksiyalar
- Ularning sohasi uchun qurilgan platforma ishonchliligi

Narxni yetkazib berish xarajatiga emas, taqdim etayotgan qiymatingizga asoslang.

### Muqobillarga bog‘lab ko‘rsating {#anchor-to-alternatives}

Fitness studiyasi egasi FitSite’ni baholaganda, uni quyidagilar bilan solishtiradi:

- **Veb-dasturchi yollash**: oldindan $2,000-$5,000 + oyiga $50-$100 texnik xizmat
- **Wix/Squarespace**: oyiga $16-$45, lekin fitnessga xos funksiyalar yo‘q, uni o‘zlari qurishadi
- **Hech narsa qilmaslik**: Ularni onlayn topa olmaydigan yo‘qotilgan a’zolar

Oyiga $49-$199 narxda FitSite dasturchidan arzonroq, umumiy builderlardan imkoniyatliroq va veb-sayt yo‘qligidan cheksiz darajada yaxshiroq.

## Narx variantlarini joriy etish {#implementing-price-variations}

Yillik narxlash majburiyatni rag‘batlantiradi va churnni kamaytiradi. Har bir tarifning **Price Variations** yorlig‘iga o‘ting va yillik variantlarni qo‘shing:

| Tarif | Oylik | Yillik (oyiga) | Yillik jami | Tejash |
|------|---------|-------------------|--------------|---------|
| Starter | $49/oy | $39/oy | $468/yil | 20% chegirma |
| Growth | $99/oy | $79/oy | $948/yil | 20% chegirma |
| Pro | $199/oy | $159/oy | $1,908/yil | 20% chegirma |

Checkout shaklingizga **Period Selection** maydonini qo‘shing, shunda mijozlar oylik va yillik billing o‘rtasida almasha oladi. [Checkout shakllari](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) bo‘limiga qarang.

### Nega yillik narxlash ishlaydi {#why-annual-pricing-works}

- **Siz uchun**: Oldindan pul oqimi, pastroq churn (yillik to‘laydigan mijozlar muddat o‘rtasida bekor qilish ehtimoli kamroq)
- **Ular uchun**: Haqiqiy tejash, budjetni oldindan rejalash imkoniyati

## Setup to‘lovlari {#setup-fees}

Qo‘lda sozlashni o‘z ichiga oladigan tariflar uchun bir martalik setup to‘lovini ko‘rib chiqing:

- **Starter**: Setup to‘lovi yo‘q (kirishdagi to‘siqlarni olib tashlash)
- **Growth**: $99 setup to‘lovi (maxsus domen konfiguratsiyasi va dastlabki konsultatsiyani qoplaydi)
- **Pro**: $299 setup to‘lovi (ko‘p lokatsiyali sozlash va onboarding qo‘ng‘irog‘ini qoplaydi)

Setup to‘lovlarini har bir tarifning narxlash bo‘limida sozlang. Tafsilotlar uchun [Birinchi subscription mahsulotingizni yaratish](/user-guide/configuration/creating-your-first-subscription-product) bo‘limiga qarang.

## Sinov muddatlari {#trial-periods}

Sinov taklif qilish ro‘yxatdan o‘tishdagi ishqalanishni kamaytiradi, lekin konversiya bo‘lmaslik xavfini keltiradi. FitSite uchun:

- Faqat Starter tarifida **7 kunlik bepul sinov**
- Growth va Pro’da sinov yo‘q (bu mijozlar qat’iyroq qaror qilgan va to‘lashni kutishadi)

Starter tarifining narxlash bo‘limida **Offer Trial** tugmasini yoqib, davomiylikni 7 kun qilib belgilang.

### Sinovlarni konversiyaga aylantirish {#making-trials-convert}

Sinov faqat mijoz sinov muddati davomida qiymatni his qilsa ishlaydi. Onboarding ketma-ketligingiz (8-dars) bu yerda juda muhim -- xush kelibsiz email’lari 7 kunlik oynada faollikni oshirishga mos vaqtda yuborilishi kerak.

## Chegirma kodlari {#discount-codes}

Muayyan maqsadlar uchun strategik chegirma kodlarini yarating:

- **FITLAUNCH** -- birinchi 3 oy uchun 30% chegirma (launch aksiyasi uchun)
- **ANNUAL20** -- yillik tariflar uchun 20% chegirma (agar allaqachon chegirma berilmagan bo‘lsa)
- **REFERRAL** -- 1 oy bepul (mijoz tavsiyalari uchun)

Bularni yaratish uchun **Ultimate Multisite > Discount Codes** bo‘limiga o‘ting. To‘liq qo‘llanma uchun [Chegirma kodlarini yaratish](/user-guide/configuration/creating-discount-codes) bo‘limiga qarang.

:::tip Do Not Discount by Default
Discounts should be strategic tools, not permanent fixtures. If everyone gets a discount, it is not a discount -- it is your real price. Use them for specific campaigns, referrals, and time-limited promotions.
:::

## Soliq bilan ishlash {#tax-handling}

Agar soliq yig‘ishni talab qiladigan yurisdiksiyada faoliyat yuritsangiz:

1. Soliq stavkalarini **Ultimate Multisite > Settings > Taxes** bo‘limida sozlang
2. Tariflaringizga soliq kategoriyalarini qo‘llang
3. Invoicelarda soliq to‘g‘ri ko‘rsatilishini ta’minlang

Batafsil konfiguratsiya uchun [Soliq bilan ishlash](/user-guide/payment-gateways/tax-handling) bo‘limiga qarang. Agar mijozlarga xalqaro miqyosda xizmat ko‘rsatsangiz, YI talablariga muvofiqlik uchun [VAT addon](/addons/vat)ni ko‘rib chiqing.

## Narxlashingizni ko‘rib chiqish {#reviewing-your-pricing}

Ishga tushirgandan so‘ng narxlashni har chorakda qayta ko‘rib chiqing. Quyidagilarga qarang:

- **Tarif bo‘yicha konversiya darajasi**: Agar Starter yaxshi konversiya qilsa, lekin Growth qilmasa, ular orasidagi farq juda katta bo‘lishi mumkin
- **Upgrade darajasi**: Agar kam mijoz Starter’dan Growth’ga o‘tsa, Growth tarifi yetarlicha qo‘shimcha qiymat taklif qilmasligi mumkin
- **Tarif bo‘yicha churn**: Agar yillik mijozlar kamroq churn qilsa, yillik narxlashni kuchliroq targ‘ib qiling
- **Raqobatchilar narxlari**: Muqobillar qancha olmoqda? Siz to‘g‘ri pozitsiyadasizmi?

## Hozirgacha FitSite Network {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Bu darsda nimalar qurdik {#what-we-built-this-lesson}

- Majburiyatni rag‘batlantirish uchun 20% chegirma bilan **yillik narxlash**
- Onboarding mehnatini qoplash uchun yuqoriroq darajalarda **setup fees**
- Ro‘yxatdan o‘tishdagi to‘siqni kamaytirish uchun boshlang‘ich plan’da **trial period**
- Ishga tushirish, tavsiyalar va kampaniyalar uchun **strategik discount codes**
- Talablarga mos billing uchun **soliq konfiguratsiyasi**
- Doimiy optimallashtirish uchun **narxlarni ko‘rib chiqish framework’i**

---

**Keyingi:** [10-dars: Ishga tushirish kuni](lesson-10-launch) -- ishga tushirishdan oldingi checklist va jonli rejimga o‘tish.
