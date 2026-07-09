---
title: '13-dars: Kengaytirish'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# 13-dars: Kengaytirish

Sizda to‘lovchi mijozlari bor ishlayotgan platforma mavjud. Bu dars kichik faoliyatdan barqaror biznesga o‘sishni — infratuzilmani kengaytirish, operatsiyalarni avtomatlashtirish va har bir mijozdan tushadigan daromadni oshirishni qamrab oladi.

## Qayerda to‘xtagan edik

FitSite ishga tushgan, mijozlar ro‘yxatdan o‘tmoqda va siz kundalik operatsiyalarni yurityapsiz. Endi e’tiborni o‘sishga qaratamiz.

## Raqamlaringizni biling

Kengaytirishdan oldin, qayerda turganingizni tushuning:

### Asosiy metrikalar

- **MRR (Monthly Recurring Revenue)**: Jami oylik obuna daromadi
- **Mijozlar soni**: Jami faol obunachilar
- **ARPU (Average Revenue Per User)**: Mijozlar soniga bo‘lingan MRR
- **Ketish ko‘rsatkichi**: Har oy bekor qiladigan mijozlar foizi
- **LTV (Lifetime Value)**: Mijozning butun obunasi davomida o‘rtacha daromadi
- **CAC (Customer Acquisition Cost)**: Bitta mijozni jalb qilishning o‘rtacha qiymati

### Misol: 50 mijozli FitSite

| Metrika | Qiymat |
|--------|-------|
| Mijozlar | 50 (30 Starter, 15 Growth, 5 Pro) |
| MRR | $4,450 ($1,470 + $1,485 + $995 + $500 buyurtma qo‘shimchalari) |
| ARPU | $89/oy |
| Oylik ketish | 4% (2 ta bekor qilish/oy) |
| LTV | $89 x 25 oy = $2,225 |

Bu raqamlar nimaga e’tibor qaratish kerakligini aytadi. Ketish yuqorimi? Saqlab qolishni tuzating. ARPU pastmi? Yangilanishlarni ilgari suring. CAC yuqorimi? Jalb qilish kanallarini optimallashtiring.

## Infratuzilmani kengaytirish

### Qachon kengaytirish kerak

Hostingni quyidagi holatlarda kengaytiring:

- Sahifa yuklanish vaqtlari sezilarli oshsa
- Server CPU yoki xotirasi muntazam 70% foydalanishdan oshsa
- Siz 100+ faol sitega yaqinlashayotgan bo‘lsangiz
- Tezlik bo‘yicha mijoz shikoyatlari oshsa

### Qanday kengaytirish kerak

- **Vertikal kengaytirish**: Kattaroq serverga o‘tish (ko‘proq CPU, RAM)
- **Keshlash qatlamlari**: Obyekt keshlash uchun Redis/Memcached, statik kontent uchun sahifa keshlashni qo‘shing
- **CDN**: Agar hali Cloudflare yoki shunga o‘xshashidan foydalanmayotgan bo‘lsangiz, statik resurslar uchun CDN qo‘shing
- **Ma’lumotlar bazasini optimallashtirish**: Tarmoq o‘sgani sayin, ma’lumotlar bazasi so‘rovlari sekinlashadi. Jadvallarni optimallashtiring, indekslar qo‘shing, alohida ma’lumotlar bazasi serverini ko‘rib chiqing.
- **Mas’uliyatlarni ajratish**: Media saqlashni obyekt saqlashga (S3-mos) ko‘chiring, emailni tranzaksion email xizmatiga yuklang

### Hosting migratsiyasi

Agar joriy hostingingiz bundan ortiq kengaya olmasa, migratsiyani rejalashtiring:

1. Yangi muhitni sozlang
2. Tarmog‘ingiz nusxasi bilan puxta sinab ko‘ring
3. Migratsiyani trafik kam bo‘ladigan soatlarga rejalashtiring
4. Oldindan minimal TTL bilan DNSni yangilang
5. Migratsiyadan keyin hammasi ishlashini tekshiring

## Operatsiyalarni avtomatlashtirish

O‘sib borganingiz sari, qo‘lda bajariladigan jarayonlar to‘siqqa aylanadi. Imkon qadar avtomatlashtiring:

### Webhooklar va Zapier

Quyidagilarni avtomatlashtirish uchun [Webhooklar](/user-guide/integrations/webhooks) yoki [Zapier](/user-guide/integrations/zapier) dan foydalaning:

- **Yangi ro‘yxatdan o‘tish bildirishnomalari** → Slack kanali yoki CRM
- **Bekor qilish ogohlantirishlari** → qaytarib olish email ketma-ketligini ishga tushiring
- **To‘lov muvaffaqiyatsizliklari** → monitoring vositangizda ogohlantirish
- **Plan yangilanishlari** → yangi funksiya qo‘llanmasi bilan tabrik emaili

### Email avtomatlashtirish

Qo‘lda yuboriladigan emaillardan avtomatlashtirilgan ketma-ketliklarga o‘ting:

- Onboarding ketma-ketligi (8-darsda allaqachon qurilgan)
- Nofaol mijozlar uchun qayta jalb qilish ketma-ketligi
- Mijozlar plan chegaralariga yaqinlashganda yangilanish takliflari
- Yillik obunachilar uchun yangilash eslatmalari

### Qo‘llab-quvvatlashni avtomatlashtirish

- Keng tarqalgan savollar uchun **tayyor javoblar**
- Qo‘llab-quvvatlash ticketlari qabul qilinganini tasdiqlovchi **avtojavoblar**
- Mijozlar mavjud maqolalarga mos ticketlar yuborganda **bilimlar bazasi takliflari**

## Daromadni oshirish

O‘sish faqat ko‘proq mijozlar haqida emas. Bu har bir mijozdan ko‘proq daromad olish haqida ham.

### Mavjud mijozlarga qo‘shimcha sotish

- **Plan yangilanishlari**: Starter mijozlariga Growth/Pro funksiyalarini ko‘rsatadigan maqsadli kampaniyalar
- **Buyurtma qo‘shimchalari**: Email orqali mavjud mijozlarga qo‘shimcha mahsulotlarni targ‘ib qiling
- **Yillik o‘tish**: Oylik mijozlarga yillik billingga o‘tish uchun chegirma taklif qiling

### Yangi daromad oqimlari

- **Siz uchun tayyor sozlash**: Mijozning siteini ular uchun sozlash va moslashtirish evaziga premium haq oling
- **Maxsus dizayn xizmatlari**: Shablon ustiga individual dizayn ishlarini taklif qiling
- **Trening sessiyalari**: Amaliy yordam istagan mijozlar uchun pullik yakkama-yakka tanishtiruvlar
- **Premium pluginlar**: Nishga xos premium pluginlarni pullik qo‘shimchalar sifatida taklif qiling (masalan, fitness darsi bron qilish widgeti)

### Narxlarni oshirish

Platformangiz yetuklashib, qiymat qo‘shgani sari:

- Mavjud mijozlarni joriy narxida qoldiring
- Yangi ro‘yxatdan o‘tishlar uchun narxlarni oshiring
- Oshirishlarni yangi funksiyalar va yaxshilanishlar bilan asoslang

## Jamoa tuzish

Qaysidir payt hammasini yolg‘iz qila olmaysiz. Odatdagi birinchi yollovlar:

1. **Qo‘llab-quvvatlash xodimi**: Kundalik mijoz savollarini hal qiladi (dastlab yarim stavka)
2. **Kontent yaratuvchi**: Bilimlar bazasi maqolalari, blog postlari va marketing kontentini yozadi
3. **Dizayner**: Shablonlarni yaxshilaydi va yangilarini yaratadi

Sizga xodimlar shart emas. Platforma biznesi uchun pudratchilar va frilanserlar yaxshi ishlaydi.

## O‘sish bosqichlari

| Bosqich | Taxminiy MRR | E’tibor |
|-----------|-----------------|-------|
| 0-25 mijoz | $0-$2,500 | Mahsulot-bozor mosligi, bevosita murojaat |
| 25-100 mijoz | $2,500-$10,000 | Operatsiyalarni tizimlashtirish, kontent marketing |
| 100-250 mijoz | $10,000-$25,000 | Qo‘llab-quvvatlashni yollash, konversiyani optimallashtirish, hostingni kengaytirish |
| 250-500 mijoz | $25,000-$50,000 | Jamoa tuzish, yangi daromad oqimlari, premium funksiyalar |
| 500+ mijoz | $50,000+ | Platforma yetukligi, qo‘shni nishlar, potensial exit |

## Bu darsda nimalarni qurdik

- Biznes salomatligini tushunish uchun **metrikalar frameworki**
- O‘nlab sitelardan yuzlab sitelarga o‘sish uchun **infratuzilmani kengaytirish rejasi**
- Qo‘llab-quvvatlash, email va operatsiyalar uchun **avtomatlashtirish strategiyalari**
- Faqat yangi mijozlarni jalb qilishdan tashqari **daromadni oshirish taktikasi**
- Yakka faoliyatdan o‘sib ketganingizda **jamoa tuzish bo‘yicha yo‘l-yo‘riq**
- Har bir bosqich uchun e’tibor sohalari bilan **o‘sish bosqichlari**

---

**Keyingi:** [14-dars: Keyin nima bo‘ladi](lesson-14-whats-next) -- birinchi nishingizdan tashqariga kengayish.
