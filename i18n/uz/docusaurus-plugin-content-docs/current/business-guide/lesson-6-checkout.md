---
title: '6-dars: Ro‘yxatdan o‘tish tajribasi'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# 6-dars: Ro‘yxatdan o‘tish tajribasi

Buyurtmani rasmiylashtirish jarayoni qiziqishni daromadga aylantiradigan joydir. Tushunarsiz yoki umumiy ro‘yxatdan o‘tish jarayoni mijozlarni yo‘qotadi. Ularning tilida gapiradigan va oson tuyuladigan nichega xos jarayon esa ularni mijozga aylantiradi.

## Qayerda to‘xtagan edik

FitSite’da shablonlar va rejalar sozlangan. Endi fitness studiya egalarini to‘lovchi mijozlarga aylantiradigan ro‘yxatdan o‘tish va buyurtmani rasmiylashtirish tajribasini yaratamiz.

## Ro‘yxatdan o‘tish jarayonini tushunish

Ultimate Multisite’ning buyurtmani rasmiylashtirish shakllari to‘liq moslashtiriladigan ko‘p bosqichli shakllardir. FitSite uchun biz quyidagicha jarayon xohlaymiz:

1. Fitness bizneslari uchun maxsus yaratilgandek tuyuladi
2. Faqat kerakli ma’lumotlarni yig‘adi
3. Mijozni imkon qadar tez ishlaydigan saytga olib boradi

To‘liq texnik ma’lumot uchun [Ro‘yxatdan o‘tish jarayoni](/user-guide/configuration/the-registration-flow) sahifasiga qarang.

## FitSite buyurtma rasmiylashtirish jarayonini loyihalash

**Ultimate Multisite > Buyurtma rasmiylashtirish shakllari** bo‘limiga o‘ting va yangi shakl yarating.

### 1-bosqich: Reja tanlash

Fitness studiya egasi birinchi ko‘radigan narsa ular tushunadigan tilda taqdim etilgan rejalar bo‘lishi kerak.

- **Narxlar jadvali** maydonini qo‘shing
- Uni uchta FitSite rejasining barchasini ko‘rsatadigan qilib sozlang
- 5-darsda yozgan reja tavsiflaringiz shu yerda ko‘rinadi -- ular texnik xususiyatlar haqida emas, fitness biznes ehtiyojlari haqida gapirayotganiga ishonch hosil qiling

:::tip Niche tili muhim
"1 GB storage" sport zal egasi uchun hech narsa anglatmaydi. "Professional studiya sayti uchun kerak bo‘lgan hamma narsa" esa hamma narsani anglatadi. Reja tavsiflarini mijozingiz tilida yozing.
:::

### 2-bosqich: Shablon tanlash

Rejani tanlagandan so‘ng, mijoz boshlang‘ich shablonini tanlaydi.

- **Shablon tanlash** maydonini qo‘shing
- Mavjud shablonlar ular tanlagan reja bo‘yicha filtrlangan bo‘ladi (5-darsda sozlangan)
- Har bir shablonda fitnessga xos dizaynni ko‘rsatadigan oldindan ko‘rish rasmi bo‘lishi kerak

### 3-bosqich: Account yaratish

Buni minimal saqlang. Faqat quyidagilarni yig‘ing:

- Email manzil
- Parol
- Studiya/biznes nomi (bu ularning sayt nomiga aylanadi)

Ro‘yxatdan o‘tishda kerak bo‘lmagan ma’lumotni so‘ramang. Har bir ortiqcha maydon konversiyani kamaytiradi.

### 4-bosqich: Saytni sozlash

- **Sayt sarlavhasi**: 3-bosqichda kiritilgan studiya nomidan oldindan to‘ldiring
- **Sayt URL**: Studiya nomidan avtomatik yarating (masalan, `ironworks.fitsite.com`)

### 5-bosqich: To‘lov

- **To‘lov** maydonini qo‘shing
- To‘lov shlyuzingizni sozlang (obuna billing uchun [Stripe](/user-guide/payment-gateways/stripe) tavsiya etiladi)
- Agar 5-darsda order bump’lar yaratgan bo‘lsangiz, to‘lov bosqichidan oldin **Order Bump** maydonini qo‘shing

### 6-bosqich: Tasdiqlash

- Tasdiqlash xabarini fitnessga xos til bilan moslashtiring
- Misol: "Fitness studiyangiz sayti yaratilmoqda. Bir necha soniyadan so‘ng yangi saytingizga yo‘naltirilasiz."

## Davr tanlash tugmasini qo‘shish

Agar rejalaringizda narx variantlarini sozlagan bo‘lsangiz (oylik va yillik), mijozlar billing davrlari o‘rtasida almasha olishi uchun buyurtmani rasmiylashtirish shakliga **Davr tanlash** maydonini qo‘shing. Ko‘rsatmalar uchun [Buyurtma rasmiylashtirish shakllari](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) sahifasiga qarang.

## To‘lovni sozlash

Agar hali to‘lov shlyuzini sozlamagan bo‘lsangiz:

1. **Ultimate Multisite > Sozlamalar > To‘lov shlyuzlari** bo‘limiga o‘ting
2. [Stripe sozlash qo‘llanmasi](/user-guide/payment-gateways/stripe) yoki o‘zingiz afzal ko‘rgan shlyuz bo‘yicha ko‘rsatmalarga amal qiling
3. Test to‘lov bilan to‘liq buyurtma rasmiylashtirish jarayonini sinab ko‘ring

To‘lovlar Accountingizga qanday o‘tishi haqida batafsil ma’lumot uchun [To‘lov olish](/user-guide/payment-gateways/getting-paid) sahifasiga qarang.

## Jarayonni sinash

Davom etishdan oldin, to‘liq test ro‘yxatdan o‘tishini yakunlang:

1. Buyurtmani rasmiylashtirish shaklini inkognito/maxfiy brauzer oynasida oching
2. Reja tanlang
3. Shablon tanlang
4. Account yarating
5. To‘lovni yakunlang (test rejimidan foydalaning)
6. Sayt to‘g‘ri shablon bilan yaratilganini tekshiring

Quyidagilarni tekshiring:

- [ ] Reja tavsiflari aniq va nichega xos
- [ ] Shablon oldindan ko‘rishlari fitnessga mos dizaynlarni ko‘rsatadi
- [ ] Sayt URL studiya nomidan to‘g‘ri yaratiladi
- [ ] To‘lov muvaffaqiyatli amalga oshadi
- [ ] Mijoz tanlangan shablon bilan ishlaydigan saytga tushadi
- [ ] Tasdiqlash emaillari fitnessga xos tildan foydalanadi

## Hozirgacha FitSite tarmog‘i

```
FitSite tarmog‘i
├── WordPress Multisite (subdomain rejimi)
├── Ultimate Multisite (sozlangan)
├── Wildcard SSL + domain mapping bilan hosting
├── Sayt shablonlari (Studio Essential, Gym Pro, Fitness Chain)
├── Mahsulotlar (Starter, Growth, Pro + Order Bumps)
├── Buyurtma rasmiylashtirish jarayoni
│   ├── Nichega xos tavsiflar bilan reja tanlash
│   ├── Fitness oldindan ko‘rishlari bilan shablon tanlash
│   ├── Minimal Account yaratish
│   ├── Stripe orqali to‘lov
│   └── Fitnessga xos tasdiqlash
└── Brendlashga tayyor (keyingi dars)
```

## Bu darsda nimalarni yaratdik

- **Ko‘p bosqichli buyurtmani rasmiylashtirish shakli** fitness studiya egalari uchun moslashtirilgan
- Ro‘yxatdan o‘tish jarayoni bo‘ylab **nichega xos til**
- **Minimal ishqalanish** -- faqat zarur maydonlar, ishlaydigan saytga tez yo‘l
- Test tekshiruvi bilan **to‘lov integratsiyasi**
- Reja tanlashdan ishlaydigan saytgacha **sinovdan o‘tgan boshidan oxirigacha jarayon**

---

**Keyingi:** [7-dars: Uni o‘zingizniki qilish](lesson-7-branding) -- platformani white-label qilamiz va FitSite’ni brend sifatida shakllantiramiz.
