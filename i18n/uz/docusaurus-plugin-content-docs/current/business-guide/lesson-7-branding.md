---
title: '7-dars: Uni o‘zingizniki qilish'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# 7-dars: Uni o'zingizniki qilish {#lesson-7-making-it-yours}

Mijozlaringiz hech qachon "qandaydir WordPress plaginidan" foydalanayotgandek his qilmasligi kerak. Ular FitSite'dan -- o'z sohasi uchun qurilgan platformadan foydalanayotgandek his qilishi kerak. Bu dars brendlash, white-label qilish va platformani mahsulotdek his qildirishni qamrab oladi.

## Qayerda to'xtagan edik {#where-we-left-off}

FitSite fitness studiya egalarini reja tanlashdan jonli saytgacha olib boradigan ishlaydigan to'lovni rasmiylashtirish oqimiga ega. Endi butun tajribani yaxlit, brendlangan mahsulotdek his qildiramiz.

## Platformangiz domeni {#your-platform-domain}

Brendingizning poydevori — domeningiz. FitSite uchun:

- **Asosiy domen**: `fitsite.com` (marketing saytingiz va tarmoq ildizi)
- **Mijoz saytlari**: `studioname.fitsite.com` (subdomenlar)
- **Maxsus domenlar**: Growth va Pro rejalaridagi mijozlar o'z domenlarini ulashi mumkin

### Domeningizni sozlash {#setting-up-your-domain}

1. Platforma domeningizni ro'yxatdan o'tkazing
2. Uni hosting provayderingizga yo'naltiring
3. Mijoz subdomenlari uchun wildcard DNS (`*.fitsite.com`) ni sozlang
4. Wildcard SSL faol ekaniga ishonch hosil qiling

Batafsil ko'rsatmalar uchun [Domen mappingini qanday sozlash](/user-guide/domain-mapping/how-to-configure-domain-mapping) sahifasiga qarang.

## Admin tajribasini white-label qilish {#white-labeling-the-admin-experience}

Fitness studiya egasi o'z sayt Dashboard'iga kirganda, WordPress yoki Ultimate Multisite brendingini emas, sizning brendingizni ko'rishi kerak.

### Maxsus kirish sahifasi {#custom-login-page}

WordPress kirish sahifasini quyidagilarni ko'rsatadigan qilib moslang:

- FitSite logotipingiz
- Fitnessga mos fon tasvirlari
- Brend ranglaringiz

### Dashboard brendingi {#dashboard-branding}

Quyidagilar uchun [Admin Page Creator](/addons/admin-page-creator) addonidan yoki maxsus CSS'dan foydalaning:

- WordPress logotipini FitSite logotipingiz bilan almashtirish
- Admin rang sxemasini brendingizga moslab sozlash
- Fitnessga xos tezkor havolalar va yordam resurslari bilan maxsus dashboard vidjeti qo'shish

### Maxsus admin sahifalari {#custom-admin-pages}

Fitness studiya egalari uchun eng muhim amallarni ko'rsatadigan maxsus admin sahifalarini yaratishni ko'rib chiqing:

- "Dars jadvalingizni tahrirlash"
- "Trener profillarini yangilash"
- "Saytingizni ko'rish"

Bu standart WordPress menyusida yashirish o'rniga, sohaga mos amallarni markazga olib chiqib, o'rganish jarayonini osonlashtiradi.

## Kommunikatsiyalaringizni brendlash {#branding-your-communications}

Har bir email, invoice va bildirishnoma brendingizni mustahkamlashi kerak.

### Tizim emaillari {#system-emails}

**Ultimate Multisite > Settings > Emails** bo'limiga o'ting va barcha tizim emaillarini moslang:

- **Yuboruvchi nomi**: FitSite
- **Yuboruvchi emaili**: hello@fitsite.com
- **Email shablonlari**: Brend ranglaringiz va logotipingizdan foydalaning
- **Til**: Butun matnda fitnessga xos bo'lsin

Moslash kerak bo'lgan asosiy emaillar:

| Email | Umumiy versiya | FitSite versiyasi |
|-------|----------------|-----------------|
| Xush kelibsiz | "Yangi saytingiz tayyor" | "Fitness studiyangiz veb-sayti jonli" |
| To'lov kvitansiyasi | "To'lov qabul qilindi" | "FitSite obuna to'lovi tasdiqlandi" |
| Sinov muddati tugashi | "Sinov muddatingiz tez orada tugaydi" | "FitSite sinov muddatingiz 3 kundan keyin tugaydi -- studiyangiz veb-saytini jonli saqlang" |

### Invoicelar {#invoices}

Invoice shablonlarini quyidagilar bilan moslang:

- FitSite logotipingiz va brend ranglaringiz
- Biznes ma'lumotlaringiz
- Fitnessga xos mahsulot nomlari (umumiy reja ID'lari emas)

## Mijozlarga ko'rinadigan sayt {#the-customer-facing-site}

Asosiy domeningiz (`fitsite.com`) platformani sotadigan marketing saytiga muhtoj. Bu Ultimate Multisite tarmoq adminidan alohida -- biznesingizning ommaviy yuzi.

Asosiy sahifalar:

- **Bosh sahifa**: Fitness bizneslari uchun aniq qiymat taklifi
- **Xususiyatlar**: FitSite nima qiladi, fitness atamalari bilan
- **Narxlar**: Sohaga xos xususiyat taqqoslashlari bilan uchta rejangiz
- **Misollar**: Platformada qurilgan saytlarni namoyish qilish
- **Ro'yxatdan o'tish**: To'lovni rasmiylashtirish formingizga havolalar

:::tip Your Marketing Site Can Be a Network Site
Create your marketing site as a site within your own network. This lets you manage it from the same dashboard and demonstrates your own platform's capabilities.
:::

## Mijozlar uchun maxsus domen {#custom-domain-for-customers}

Maxsus domenlarni o'z ichiga olgan rejalardagi mijozlar uchun jarayonni aniq hujjatlashtiring:

1. Mijoz o'z domenini registratorda ro'yxatdan o'tkazadi yoki ko'chiradi
2. Mijoz DNS'ni platformangizga yo'naltirish uchun yangilaydi (aniq yozuvlarni taqdim eting)
3. Ultimate Multisite domen mappingi va SSL'ni boshqaradi

Aynan shu jarayon uchun texnik bo'lmagan fitness studiya egalari uchun yozilgan yordam maqolasi yoki bilimlar bazasi yozuvini yarating.

## Hozirgacha FitSite tarmog'i {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Bu darsda nimalarni qurdik {#what-we-built-this-lesson}

- Brendlangan tajriba uchun sozlangan **platforma domeni va DNS**
- Butun FitSite brendingi bilan **white-label qilingan admin**
- **Moslangan kommunikatsiyalar** -- emaillar, invoicelar va bildirishnomalar hammasi brendga mos
- Fitness studiya egalariga FitSite'ni sotadigan **marketing sayti**
- O'z domenini xohlaydigan mijozlar uchun **maxsus domen hujjatlari**

---

**Keyingi:** [8-dars: Mijoz onboarding'i](lesson-8-onboarding) -- yangi ro'yxatdan o'tgan foydalanuvchini faol va mamnun mijozga aylantiradigan tajribani loyihalaymiz.
