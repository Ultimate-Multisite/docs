---
title: '3-dars: Tarmog‘ingizni sozlash'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# 3-dars: Tarmog‘ingizni sozlash

Qurish vaqti keldi. Bu darsda siz Ultimate Multisite’ni o‘rnatasiz va FitSite tarmog‘ining poydevorini sozlaysiz. Bu yerdagi har bir qaror fitness yo‘nalishini hisobga olgan holda qabul qilinadi.

## Qayerda to‘xtagan edik

Biz yo‘nalishimiz sifatida fitness studiyalarini tanladik va imkoniyatni tasdiqladik. Endi bu g‘oyani ishlaydigan platformaga aylantiramiz.

## Hosting tanlash

Yo‘nalishga ixtisoslashgan platforma uchun hosting tanlovi bitta website’ga qaraganda muhimroq. Siz bitta site’ni joylashtirmayapsiz -- siz o‘nlab yoki yuzlab site’larga o‘sadigan tarmoqni joylashtiryapsiz.

### Nimalarga e’tibor berish kerak

- **WordPress Multisite qo‘llab-quvvatlashi**: Hamma hostlar multisite’ni yaxshi boshqara olmaydi
- **Wildcard SSL**: Subdomain asosidagi tarmoqlar uchun zarur
- **Kengaytiriladigan resurslar**: Migratsiyasiz o‘sish uchun joy kerak
- **Ultimate Multisite integratsiyasi**: Avtomatlashtirilgan domain mapping va SSL sezilarli operatsion mehnatni tejaydi

### Tavsiya etilgan yondashuv

[Mos provayderlar](/user-guide/host-integrations/closte) ro‘yxatidan host tanlang. Ular Ultimate Multisite bilan sinovdan o‘tgan va domain mapping hamda SSL avtomatlashtirish uchun kerakli integratsiyalarni taqdim etadi.

FitSite uchun biz subdomain konfiguratsiyasidan foydalanamiz. Bu mijoz site’lari o‘z domain’ini ixtiyoriy ravishda ulashdan oldin dastlab `studioname.fitsite.com` ko‘rinishida paydo bo‘lishini anglatadi.

## WordPress Multisite’ni o‘rnatish

Agar sizda hali WordPress Multisite o‘rnatilmagan bo‘lsa:

1. Hosting provayderingizga WordPress o‘rnating
2. [WordPress Multisite’ni qanday o‘rnatish](/user-guide/getting-started/how-to-install-wordpress-multisite) qo‘llanmasiga amal qiling
3. So‘ralganda **subdomain** konfiguratsiyasini tanlang

:::tip Nima uchun subdomainlar?
Subdomainlar har bir mijoz site’iga path (`fitsite.com/studio`) o‘rniga o‘zining alohida manzilini (`studio.fitsite.com`) beradi. Bu mijozlaringiz uchun professionalroq ko‘rinadi va permalink ziddiyatlarining oldini oladi. Batafsil taqqoslash uchun [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) ga qarang.
:::

## Ultimate Multisite’ni o‘rnatish

Quyidagilar uchun [Ultimate Multisite’ni o‘rnatish](/user-guide/getting-started/installing-ultimate-multisite) qo‘llanmasiga amal qiling:

1. Plugin’ni yuklang va butun tarmoq bo‘ylab faollashtiring
2. [Sozlash ustasi](/user-guide/getting-started/multisite-setup-wizard) ni ishga tushiring

Sozlash ustasi davomida FitSite yo‘nalishini yodda tuting:

- **Valyuta**: Fitness studiya mijozlaringiz ishlatadigan valyutani belgilang
- **Kompaniya nomi**: "FitSite" (yoki tanlagan brend nomingiz)
- **Kompaniya logotipi**: Brend logotipingizni yuklang -- bu invoice’lar va email’larda ko‘rinadi

## Fitness yo‘nalishi uchun sozlash

Ultimate Multisite o‘rnatilgach, quyidagi yo‘nalishga xos konfiguratsiya tanlovlarini qiling:

### Umumiy sozlamalar

**Ultimate Multisite > Sozlamalar** bo‘limiga o‘ting va sozlang:

- **Site nomi**: FitSite
- **Standart rol**: Administrator -- fitness studiya egalari o‘z site kontenti ustidan to‘liq nazoratga muhtoj
- **Ro‘yxatdan o‘tish**: Studiya egalari o‘zlari ro‘yxatdan o‘ta olishi uchun foydalanuvchi ro‘yxatdan o‘tishini yoqing

### Email konfiguratsiyasi

Tizim email’laringiz yo‘nalishingiz tilida gapirishi kerak. **Ultimate Multisite > Sozlamalar > Email’lar** bo‘limiga o‘ting va moslashtiring:

- Umumiy "your new site" iborasini fitnessga xos xabarlar bilan almashtiring
- Xush kelibsiz mavzusi namunasi: "Fitness studiyangiz website’i tayyor"
- Xush kelibsiz matni namunasi: Ularning studiyasi, darslari va fitness site’i bilan ishni boshlashga havola qiling

Bularni 8-darsda (Mijozlarni moslashtirish) yanada takomillashtiramiz, ammo hozirdanoq ohangni belgilash hatto dastlabki test ro‘yxatdan o‘tishlari ham yo‘nalishga xos tuyulishini ta’minlaydi.

### Domain konfiguratsiyasi

Agar mos hosting provayderidan foydalanayotgan bo‘lsangiz, domain mapping’ni hozir sozlang:

1. **Ultimate Multisite > Sozlamalar > Domain Mapping** bo‘limiga o‘ting
2. Aniq hostingiz uchun integratsiya qo‘llanmasiga amal qiling
3. Yangi subsite’lar avtomatik SSL olishini sinab ko‘ring

Bu keyingi darsda template’lar va test site’larini yaratishni boshlaganimizda hamma narsa boshidan oxirigacha ishlashini ta’minlaydi.

## Hozirgacha FitSite tarmog‘i

Bu dars oxirida sizda quyidagilar bo‘ladi:

```
FitSite tarmog‘i
├── WordPress Multisite (subdomain rejimi)
├── Ultimate Multisite (o‘rnatilgan va sozlangan)
├── Wildcard SSL bilan hosting
├── Domain mapping sozlangan
├── Yo‘nalishga xos email template’lari (dastlabki)
└── Site template’lari uchun tayyor (keyingi dars)
```

## Bu darsda nimalar qurdik

- Subdomain rejimida **ishlaydigan WordPress Multisite** o‘rnatmasi
- FitSite brendingi bilan **Ultimate Multisite o‘rnatildi** va sozlandi
- O‘sib boruvchi tarmoq uchun **hosting va SSL** sozlandi
- Hosting provayderingiz uchun **domain mapping** sozlandi
- Birinchi kundanoq **yo‘nalishga xos email ohangi** belgilandi

---

**Keyingi:** [4-dars: Yo‘nalishga xos template’lar yaratish](lesson-4-templates) -- biz fitness studiya egalari haqiqatan ham ishlatishni xohlaydigan site template’larini yaratamiz.
