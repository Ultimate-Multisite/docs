---
title: Asboblar va konfiguratsiya
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Vositalar va konfiguratsiya {#tools-and-configuration}

Theme Builder WordPress saytingizni tahlil qilish, dizayn qilish va qurish uchun vositalar to‘plamidan foydalanadi. 1.16.0 versiyada **sd-ai-agent/site-scrape endi Tier 1 vosita**, shu sababli u Theme Builder’da sukut bo‘yicha mavjud. Superdav AI Agent v1.18.0 shuningdek ishonchli dasturchi ish jarayonlari uchun alohida tarqatiladigan Advanced hamroh paketini taqdim etadi; bu vositalar WordPress.org asosiy paketining bir qismi emas va alohida o‘rnatilishi hamda avtorizatsiya qilinishi kerak.

## Mavjud vositalar {#available-tools}

### Tier 1 vositalar (har doim mavjud) {#tier-1-tools-always-available}

Tier 1 vositalar Theme Builder’da hech qanday qo‘shimcha konfiguratsiyasiz sukut bo‘yicha mavjud.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Maqsad:** Dizayn ilhomi, kontent tuzilmasi va funksionallikni ajratib olish uchun mavjud veb-saytlarni tahlil qilish.

**Imkoniyatlar:**

- **Veb-sayt tahlili** — raqobatchi yoki ilhom manbai bo‘lgan veb-saytlarni skrap qilish va tahlil qilish
- **Dizaynni ajratib olish** — ranglar, shriftlar va maket andozalarini aniqlash
- **Kontent tuzilmasi** — sahifa tashkiloti va iyerarxiyasini tushunish
- **Xususiyatlarni aniqlash** — pluginlar va funksionallikni aniqlash
- **Ishlash samaradorligi tahlili** — sahifa tezligi va optimallashtirishni tekshirish
- **SEO tahlili** — meta teglar va tuzilmaviy ma’lumotlarni ko‘rib chiqish

**Foydalanish:**

```
example.com dizaynini tahlil qiling va uni mening saytim uchun ilhom sifatida ishlating.
```

**U nimalarni ajratib oladi:**

- Rang palitrasi va ranglardan foydalanish
- Tipografiya (shriftlar va o‘lchamlar)
- Maket tuzilmasi va oraliqlar
- Navigatsiya andozalari
- Kontent tashkiloti
- Rasmlar va mediadan foydalanish
- Interaktiv elementlar
- Mobil moslashuvchanlik

**Cheklovlar:**

- Parol bilan himoyalangan saytlarni skrap qila olmaydi
- robots.txt va sayt siyosatlariga rioya qiladi
- Dinamik kontentni qamrab olmasligi mumkin
- JavaScript ko‘p ishlatiladigan saytlarda tahlil cheklangan bo‘lishi mumkin
- Katta saytlarni tahlil qilish ko‘proq vaqt olishi mumkin

### Tier 2 vositalar (ixtiyoriy) {#tier-2-tools-optional}

Tier 2 vositalar Theme Builder sozlamalarida aniq yoqilganda mavjud bo‘ladi.

#### Kengaytirilgan analitika {#advanced-analytics}

Batafsil ishlash samaradorligi ko‘rsatkichlarini taqdim etadi:

- Sahifa yuklanish vaqtlari
- Core Web Vitals
- SEO bahosi
- Foydalanish imkoniyati bahosi
- Eng yaxshi amaliyotlar bahosi

#### Kontent optimallashtiruvchi {#content-optimizer}

Quyidagilar uchun yaxshilashlarni tahlil qiladi va taklif qiladi:

- O‘qiluvchanlik
- SEO optimallashtirish
- Kalit so‘zlardan foydalanish
- Kontent tuzilmasi
- Harakatga chaqiruv joylashuvi

### Tier 3 vositalar (premium) {#tier-3-tools-premium}

Tier 3 vositalar qo‘shimcha konfiguratsiya yoki premium xususiyatlarni talab qiladi.

#### AI kontent generatori {#ai-content-generator}

Quyidagilar uchun kontent yaratadi:

- Mahsulot tavsiflari
- Xizmat sahifalari
- Blog postlari
- Meta tavsiflar
- Harakatga chaqiruv matni

#### Kengaytirilgan dizayn vositalari {#advanced-design-tools}

Kengaytirilgan dizayn imkoniyatlarini taqdim etadi:

- Maxsus CSS yaratish
- Animatsiya yaratish
- Interaktiv element dizayni
- Kengaytirilgan rang nazariyasi
- Tipografiyani optimallashtirish

### Advanced hamroh vositalar (alohida paket) {#advanced-companion-tools-separate-package}

Advanced hamroh paketi asosiy Superdav AI Agent relizidan alohida tarqatiladi. U administratorlar agentga yuqori ta’sirli vositalardan foydalanishga aniq ruxsat beradigan ishonchli dasturchi va sayt egasi muhitlari uchun mo‘ljallangan.

Advanced hamroh imkoniyatlari quyidagilarni o‘z ichiga olishi mumkin:

- **Fayl tizimi vositalari** — ishonchli muhitlarda tasdiqlangan fayllarni tekshirish va o‘zgartirish
- **Ma’lumotlar bazasi vositalari** — aniq avtorizatsiya qilinganda sayt ma’lumotlarini so‘rash yoki yangilash
- **WP-CLI vositalari** — WordPress texnik xizmat va tekshiruv buyruqlarini ishga tushirish
- **REST dispetcher vositalari** — boshqariladigan dispetcherlash ish jarayonlari orqali ro‘yxatdan o‘tgan REST endpointlarini chaqirish
- **Plugin quruvchi vositalari** — plugin kodini tayyorlash va takroran takomillashtirish
- **Git snapshot vositalari** — xavfli dasturchi amallaridan oldin snapshotlar yaratish
- **Foydalanuvchini boshqarish vositalari** — ruxsat berilgan joylarda foydalanuvchi yozuvlarini ko‘rib chiqish yoki sozlashga yordam berish
- **Benchmark vositalari** — ishlab chiqish ko‘rib chiqishi uchun ishlash samaradorligi yoki imkoniyat benchmarklarini ishga tushirish

Bularni har bir o‘rnatish uchun umumiy mavjud Theme Builder vositalari sifatida hujjatlashtirmang. Ular faqat Advanced hamroh paketi o‘rnatilgan, yoqilgan va ishonchli administratorlar bilan cheklangan bo‘lsa mavjud.

## Vosita konfiguratsiyasi {#tool-configuration}

### Vositalarni yoqish {#enabling-tools}

Theme Builder’da qo‘shimcha vositalarni yoqish uchun:

1. **Gratis AI Agent → Settings** bo‘limiga o‘ting
2. **Theme Builder → Tools** bo‘limiga o‘ting
3. Zaruratga qarab vositalarni yoqing/o‘chiring
4. Sozlamalarni saqlang

### Vosita ruxsatlari {#tool-permissions}

Ba’zi vositalar ruxsatlarni talab qiladi:

- **Sayt skrap qilish** — internetga kirishni talab qiladi
- **Analitika** — Google Analytics integratsiyasini talab qiladi
- **Kontent yaratish** — API kalitlarini talab qiladi
- **Kengaytirilgan xususiyatlar** — premium obunani talab qilishi mumkin
- **Advanced hamroh vositalar** — alohida tarqatiladigan Advanced paketi va administratorning aniq ishonchini talab qiladi

### API kalitlari va hisob ma’lumotlari {#api-keys-and-credentials}

Ularni talab qiladigan vositalar uchun API kalitlarini sozlang:

1. **Gratis AI Agent → Settings → API Keys** bo‘limiga o‘ting
2. Har bir vosita uchun hisob ma’lumotlarini kiriting
3. Ulanishni sinab ko‘ring
4. Xavfsiz saqlang

### Advanced hamroh paketini o‘rnatish {#installing-the-advanced-companion-package}

Advanced hamroh paketi WordPress.org asosiy ZIP faylidan alohida chiqariladi. Uni faqat reliz uchun rasmiy loyiha tarqatish kanalidan o‘rnating, so‘ng kirishni ishonchli administratorlar bilan cheklang. Ishlab turgan saytda fayl tizimi, ma’lumotlar bazasi, WP-CLI, REST dispetcher, plugin quruvchi, foydalanuvchini boshqarish yoki benchmark vositalarini yoqishdan oldin inson tasdiqlash darvozalari va git snapshot xatti-harakatini ko‘rib chiqing.

## sd-ai-agent/site-scrape’dan foydalanish {#using-sd-ai-agentsite-scrape}

### Asosiy foydalanish {#basic-usage}

Theme Builder’dan veb-saytni tahlil qilishni so‘rang:

```
competitor.com manzilidagi raqobatchim saytining dizaynini tahlil qiling
va mening saytim uchun dizayn yaxshilashlarini taklif qiling.
```

### Muayyan tahlil {#specific-analysis}

Muayyan turdagi tahlilni so‘rang:

```
example.com’dan rang palitrasini ajratib oling va uni ilhom sifatida ishlating.
```

```
example.com navigatsiya tuzilmasini tahlil qiling va shunga o‘xshash
tashkilotni mening saytimga qo‘llang.
```

```
example.com’ning mobil moslashuvchanligini tekshiring va mening saytim
xuddi shunday moslashuvchan ekaniga ishonch hosil qiling.
```

### Taqqoslash tahlili {#comparison-analysis}

Bir nechta saytlarni taqqoslang:

```
site1.com va site2.com dizaynlarini taqqoslang va ikkalasining eng yaxshi
elementlarini birlashtiradigan dizayn yarating.
```

## Vosita cheklovlari va mulohazalar {#tool-limitations-and-considerations}

### Tezlikni cheklash {#rate-limiting}

- Scraping server haddan tashqari yuklanishining oldini olish uchun tezlik bo‘yicha cheklanadi
- Bir xil saytga bir nechta so‘rovlar sekinlashtirilishi mumkin
- Katta saytlarni tahlil qilish ko‘proq vaqt olishi mumkin

### Kontent aniqligi {#content-accuracy}

- Dinamik kontent to‘liq qamrab olinmasligi mumkin
- JavaScript orqali ko‘rsatiladigan kontent to‘liq bo‘lmasligi mumkin
- Real vaqt ma’lumotlari aks etmasligi mumkin
- Ayrim kontent paywall ortida bo‘lishi mumkin

### Huquqiy va axloqiy jihatlar {#legal-and-ethical-considerations}

- robots.txt va sayt siyosatlariga rioya qiling
- Mualliflik huquqi bilan himoyalangan kontentni qayta nashr qilish uchun scrape qilmang
- Tahlildan nusxa ko‘chirish uchun emas, ilhom olish uchun foydalaning
- Olingan kontentdan foydalanish huquqiga ega ekaningizni tekshiring
- Tahlil qilingan saytlarning xizmat ko‘rsatish shartlariga rioya qiling

### Ishlashga ta’siri {#performance-impact}

- Katta saytlarni scraping qilish vaqt olishi mumkin
- Bir vaqtning o‘zida bir nechta scraping jarayonlari sekinroq bo‘lishi mumkin
- Tarmoq ulanishi tezlikka ta’sir qiladi
- Katta ma’lumotlar to‘plamlari ko‘proq qayta ishlashni talab qilishi mumkin

## Eng yaxshi amaliyotlar {#best-practices}

### Sayt tahlilidan foydalanish {#using-site-analysis}

1. **Bir nechta saytlarni tahlil qiling** — bir necha manbadan ilhom to‘plang
2. **Tuzilmaga e’tibor qarating** — joylashuv va tashkil etish andozalarini o‘rganing
3. **Ranglarni ajratib oling** — rang palitralaridan boshlang‘ich nuqta sifatida foydalaning
4. **Tipografiyani o‘rganing** — sizga yoqadigan shrift kombinatsiyalarini aniqlang
5. **Navigatsiyani ko‘rib chiqing** — menyu tashkil etilishini tushuning

### Axloqiy scraping {#ethical-scraping}

1. **robots.txt ga rioya qiling** — sayt ko‘rsatmalariga amal qiling
2. **Kontentdan nusxa ko‘chirmang** — tahlildan faqat ilhom olish uchun foydalaning
3. **Huquqlarni tekshiring** — olingan kontentdan foydalana olishingizga ishonch hosil qiling
4. **Manbalarni ko‘rsating** — ilhom manbalariga e’tirof bering
5. **Shartlarga rioya qiling** — sayt xizmat ko‘rsatish shartlariga amal qiling

### Vosita samaradorligini maksimal darajaga oshirish {#maximizing-tool-effectiveness}

1. **Aniq bo‘ling** — aniq tahlil turlarini so‘rang
2. **Kontekst bering** — saytingiz maqsadini tushuntiring
3. **Kutilmalarni belgilang** — dizayn maqsadlaringizni tasvirlang
4. **Takroriy takomillashtiring** — natijalar asosida aniqlashtiring
5. **Vositalarni birlashtiring** — keng qamrovli tahlil uchun bir nechta vositadan foydalaning

## Muammolarni bartaraf etish {#troubleshooting}

### Sayt scrape qilinmayapti {#site-wont-scrape}

- Sayt ommaga ochiq ekanini tekshiring
- robots.txt scraping ga ruxsat berishini tekshiring
- Boshqa saytni sinab ko‘ring
- Internet ulanishini tekshiring
- Muammo davom etsa, yordam xizmatiga murojaat qiling

### To‘liq bo‘lmagan tahlil {#incomplete-analysis}

- Saytda dinamik kontent bo‘lishi mumkin
- JavaScript to‘liq render qilinmasligi mumkin
- Katta saytlar timeout bo‘lishi mumkin
- Buning o‘rniga aniq sahifalarni tahlil qilib ko‘ring
- Aniq tahlil turlarini so‘rang

### Sekin ishlash {#slow-performance}

- Katta saytlarni tahlil qilish ko‘proq vaqt oladi
- Bir vaqtning o‘zida bir nechta scraping sekinroq bo‘ladi
- Tarmoq ulanishi tezlikka ta’sir qiladi
- Tig‘iz bo‘lmagan soatlarda sinab ko‘ring
- Avval kichikroq bo‘limlarni tahlil qiling

## Tegishli hujjatlar {#related-documentation}

- [Kashfiyot intervyusi](./discovery-interview.md) — dizayn ma’lumotlarini to‘plang
- [Dizayn yo‘nalishi](./design-direction.md) — dizayningizni takomillashtiring
- [Mehmondo‘stlik menyulari](./hospitality-menus.md) — menyu sahifalarini yarating
