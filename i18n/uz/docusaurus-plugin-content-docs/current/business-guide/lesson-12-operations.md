---
title: '12-dars: Biznesni yuritish'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# 12-dars: Biznesni yuritish {#lesson-12-running-the-business}

Platforma yakunlab qo‘yiladigan loyiha emas -- u siz yuritadigan biznesdir. Bu dars FitSite’ni boshqarishdagi kundalik operatsiyalarni qamrab oladi: qo‘llab-quvvatlash, billing, texnik xizmat va mijozlarni mamnun saqlash.

## Qayerda to‘xtagan edik {#where-we-left-off}

FitSite ishga tushgan va mijozlar ro‘yxatdan o‘tmoqda. Endi operatsiyani barqaror yuritishingiz kerak.

## Kundalik operatsiyalar {#daily-operations}

### Monitoring {#monitoring}

Bularni har kuni tekshiring (yoki ogohlantirishlarni sozlang):

- **Uptime**: Platformaga kirish mumkinmi? Uptime monitoring xizmatidan foydalaning.
- **Yangi ro‘yxatdan o‘tishlar**: Bugun nechta yangi mijoz ro‘yxatdan o‘tdi?
- **Muvaffaqiyatsiz to‘lovlar**: E’tibor talab qiladigan to‘lov muvaffaqiyatsizliklari bormi?
- **Qo‘llab-quvvatlash so‘rovlari**: Javobsiz qolgan mijoz savollari bormi?

### Mijozlarni qo‘llab-quvvatlash {#customer-support}

Nishaga e’tiboringiz bu yerda ustunlik beradi. Chunki barcha mijozlaringiz fitness studiyalari bo‘lgani uchun, bir xil savollarni qayta-qayta ko‘rasiz:

**Siz oladigan keng tarqalgan savollar:**

- "Darslar jadvalimni qanday yangilayman?"
- "Saytim ranglarini o‘zgartira olamanmi?"
- "Saytimga yangi trenerni qanday qo‘shaman?"
- "Domenim ishlamayapti"
- "Planimni qanday bekor qilaman/yangilayman?"

Bilimlar bazangizni (8-darsda boshlangan) shu takrorlanuvchi savollar atrofida quring. Bilimlar bazasi maqolasi bo‘lishi mumkin bo‘lgan har bir support ticket — o‘sha maqolani yozish kerakligi haqidagi signaldir.

### Qo‘llab-quvvatlash darajalari {#support-tiers}

O‘sganingiz sari, qo‘llab-quvvatlashni plan bo‘yicha tuzing:

| Plan | Qo‘llab-quvvatlash darajasi | Javob vaqti |
|------|--------------|---------------|
| Starter | Bilimlar bazasi + email | 48 soat |
| Growth | Email orqali qo‘llab-quvvatlash | 24 soat |
| Pro | Ustuvor email + onboarding qo‘ng‘irog‘i | 4 soat |

[Support Tickets addon](/addons/support-tickets) platforma ichida qo‘llab-quvvatlash so‘rovlarini boshqarishga yordam berishi mumkin.

## Billing operatsiyalari {#billing-operations}

### Takroriy to‘lovlar {#recurring-payments}

Ultimate Multisite takroriy billingni to‘lov shlyuzingiz orqali avtomatik boshqaradi. Sizning vazifangiz quyidagilarni kuzatish:

- **Muvaffaqiyatsiz to‘lovlar**: Tezda izidan boring. Ko‘p muvaffaqiyatsizliklar qasddan bekor qilish emas, balki muddati o‘tgan kartalardir.
- **Dunning**: To‘lov shlyuzingiz orqali avtomatlashtirilgan qayta urinish mantiqini sozlang (Stripe buni yaxshi bajaradi)
- **Bekor qilish so‘rovlari**: Mijozlar nega ketayotganini tushuning. Har bir bekor qilish — fikr-mulohazadir.

### Memberships boshqaruvi {#managing-memberships}

Quyidagilar uchun **Ultimate Multisite > Memberships** bo‘limiga o‘ting:

- Barcha faol obunalarni ko‘rish
- Upgrade va downgrade so‘rovlarini hal qilish
- Zarur bo‘lganda refundlarni qayta ishlash
- Sinov muddati tugashlarini boshqarish

To‘liq ma’lumot uchun [Memberships boshqaruvi](/user-guide/administration/managing-memberships) bo‘limiga qarang.

### Invoicing {#invoicing}

Har bir to‘lov uchun invoicelar to‘g‘ri yaratilganiga ishonch hosil qiling. Mijozlarga biznes xarajatlari hisobotlari uchun invoicelar kerak bo‘lishi mumkin. [To‘lovlar va invoicelarni boshqarish](/user-guide/administration/managing-payments-and-invoices) bo‘limiga qarang.

## Platformaga texnik xizmat {#platform-maintenance}

### WordPress va plugin yangilanishlari {#wordpress-and-plugin-updates}

Tarmoq administratori sifatida siz quyidagilar uchun javobgarsiz:

- **WordPress core yangilanishlari**: Productionga qo‘llashdan oldin staging saytda sinab ko‘ring
- **Plugin yangilanishlari**: Xuddi shunday -- avval sinab ko‘ring, keyin butun tarmoq bo‘ylab qo‘llang
- **Theme yangilanishlari**: Theme yangilanishlaridan keyin templatelar hali ham to‘g‘ri ko‘rinishini tekshiring
- **Ultimate Multisite yangilanishlari**: Yangilashdan oldin changelogni kuzating va sinab ko‘ring

:::warning Productionda sinovsiz hech qachon yangilamang
Buzilgan yangilanish tarmog‘ingizdagi har bir mijoz saytiga ta’sir qiladi. Yangilanishlarni har doim avval tarmog‘ingizning staging nusxasida sinab ko‘ring.
:::

### Xavfsizlik {#security}

- Barcha dasturiy ta’minotni yangilab turing
- Admin accountlar uchun kuchli parollar va ikki faktorli autentifikatsiyadan foydalaning
- Shubhali faollikni kuzating
- Xavfsizlik hodisalari uchun rejangiz bo‘lsin

### Performance {#performance}

Tarmog‘ingiz o‘sgani sari, quyidagilarni kuzating:

- **Sahifa yuklanish vaqtlari**: Mijoz saytlari tezmi?
- **Server resurslaridan foydalanish**: CPU, xotira, disk joyi
- **Database performance**: Katta tarmoqlarga vaqt o‘tishi bilan database optimallashtirish kerak bo‘ladi

Agar hali qilmagan bo‘lsangiz, caching (page cache, object cache) va CDN joriy etishni ko‘rib chiqing. [Cloudflare integratsiyasi](/user-guide/host-integrations/cloudflare) buning katta qismini bajaradi.

## Mijoz hayotiy siklini boshqarish {#customer-lifecycle-management}

### Churnni kamaytirish {#reducing-churn}

Churn — har oy bekor qiladigan mijozlar foizi. Obuna biznesi uchun churnni kamaytirish yangi mijozlarni jalb qilish kabi muhim.

**Fitness studio mijozlari churn qilishining keng tarqalgan sabablari:**

- Ular platformadan qanday foydalanishni tushuna olmadi → onboardingni yaxshilang
- Sayt yetarlicha yaxshi ko‘rinmadi → templatelarni yaxshilang
- Ular qiymatni ko‘rmadi → funksiyalarni yoki kommunikatsiyani yaxshilang
- Ular arzonroq muqobil topdi → nishadagi qiymatingizni kuchaytiring
- Ularning biznesi yopildi → oldini olib bo‘lmaydi, lekin buni alohida kuzating

### Upgrade qilishga undash {#encouraging-upgrades}

Muvaffaqiyatga erishayotgan Starter mijozlarini upgrade qilishga undash kerak:

- Ular plan limitlariga (saytlar, saqlash joyi) yetganda, upgrade takliflarini ko‘rsating
- Ular foyda ko‘radigan Growth plan funksiyalarini ta’kidlaydigan maqsadli emaillar yuboring
- Growth/Pro mijozlari nimalar qurganini namoyish qiling

### Qaytarib olish kampaniyalari {#win-back-campaigns}

Mijoz bekor qilganda:

1. Sababini so‘rang (chiqish so‘rovi yoki email)
2. Imkon bo‘lsa, ularning xavotirini hal qiling
3. Qaytish uchun chegirma taklif qiling (bekor qilingandan 30-60 kun o‘tib)

## Haftalik va oylik rutinlar {#weekly-and-monthly-routines}

### Haftalik {#weekly}

- Yangi ro‘yxatdan o‘tishlar va bekor qilishlarni ko‘rib chiqing
- Barcha ochiq support ticketlarga javob bering
- Platforma performance va uptimeni tekshiring
- Har qanday muvaffaqiyatsiz to‘lovlarni ko‘rib chiqing

### Oylik {#monthly}

- Asosiy metrikalarni tahlil qiling (MRR, churn, yangi mijozlar, upgradenlar)
- WordPress va plugin yangilanishlarini qo‘llang (staging sinovidan keyin)
- Qo‘llab-quvvatlash naqshlari asosida bilimlar bazasini ko‘rib chiqing va yangilang
- Mijozlarga newsletter yoki yangilik yuboring (yangi funksiyalar, maslahatlar, fitness sohasi yangiliklari)

### Har chorakda {#quarterly}

- Narxlarni raqobatchilar va mijoz fikr-mulohazalariga nisbatan ko‘rib chiqing
- Template dizaynlarini baholang -- ularni yangilash kerakmi?
- Hosting sig‘imini baholang -- scale qilish kerakmi?
- Aktivatsiya ma’lumotlari asosida onboardingni ko‘rib chiqing va yaxshilang

## Bu darsda nimalarni qurdik {#what-we-built-this-lesson}

- **Kundalik monitoring tartiblari** uptime, ro‘yxatdan o‘tishlar, to‘lovlar va qo‘llab-quvvatlash uchun
- **Darajalangan qo‘llab-quvvatlash tuzilmasi** plan darajalariga moslashtirilgan
- **Billing amaliyotlari**, jumladan dunning va bekor qilishni boshqarish
- **Texnik xizmat ko‘rsatish tartiblari** yangilanishlar, xavfsizlik va unumdorlik uchun
- **Churnni kamaytirish strategiyalari** fitness yo‘nalishiga xos
- **Haftalik, oylik va choraklik operatsion tartiblar**

---

**Keyingi:** [Dars 13: Kengaytirish](lesson-13-growth) -- FitSite’ni kichik faoliyatdan haqiqiy biznesga aylantirish.
